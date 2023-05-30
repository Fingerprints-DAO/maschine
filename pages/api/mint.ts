import { ethers } from 'ethers'
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import signBid from './helpers/_sign'
import { isAllowed, ipToLocation } from './helpers/_ip'
import { Address, readContracts } from 'wagmi'
import DutchAuctionContract from '@web3/contracts/dutch-auction/abi'
import '../helpers/_wagmi-client'

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

type MintData = {
  deadline: number
  signature: Address
  currentPrice: string
}

export type MintResponse = {
  success: boolean
  message?: string
  data?: MintData
}

const dutchAuctionContract = {
  address: process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS as Address,
  abi: DutchAuctionContract,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<MintResponse>) {
  const response = await fetch('https://api.ipify.org', {
    method: 'GET',
    headers: { 'Content-Type': 'text/plain' },
  })

  const ip = await response.text()

  let { address, qty } = req.body
  qty = parseInt(qty)
  if (!ethers.utils.isAddress(address) || isNaN(qty)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Request Body',
    })
  }

  let country: string, region: string, locality: string, postalCode: string
  try {
    const location = await ipToLocation(ip)
    country = location.addressCountry
    region = location.addressRegion
    locality = location.addressLocality
    postalCode = location.postalCode

    if (!isAllowed(location.addressCountry)) {
      return res.status(400).json({
        success: false,
        message: 'Mint is not allowed in your country',
      })
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: 'Failed to get geo location',
    })
  }

  const multiCalls = await readContracts({
    contracts: [
      {
        ...dutchAuctionContract,
        functionName: 'getNonce',
        args: [address],
      },
      {
        ...dutchAuctionContract,
        functionName: 'getCurrentPriceInWei',
      },
      {
        ...dutchAuctionContract,
        functionName: 'getUserData',
        args: [address],
      },
      {
        ...dutchAuctionContract,
        functionName: 'getConfig',
      },
    ],
  })

  let nonce = 0

  const [rawNonce, currentPrice, userData, config] = multiCalls
  const totalAfterMint = userData.contribution.add(currentPrice.mul(qty))

  if (totalAfterMint.gt(config.limitInWei)) {
    return res.status(400).json({
      success: false,
      message: 'Can not purchase more than limit',
    })
  }

  nonce = parseInt(rawNonce.toString())

  // store to supabase
  await supabase.from(process.env.SUPABASE_TABLE ?? '').insert({
    address,
    qty,
    price: ethers.utils.formatEther(currentPrice),
    ip: ip as string,
    country,
    region,
    locality,
    postalCode,
  })

  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY as string)
  const deadline = Math.floor(Date.now() / 1000) + 90 * 60
  const signature = await signBid(signer, process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS as string, {
    account: address,
    qty,
    nonce,
    deadline,
  })

  res.status(200).json({
    success: true,
    data: {
      deadline,
      signature: signature as Address,
      currentPrice: ethers.utils.formatEther(currentPrice),
    },
  })
}
