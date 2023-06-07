import { ethers } from 'ethers'
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import signBid from './helpers/_sign'
import { isAllowed } from './helpers/_ip'
import { Address, readContracts } from 'wagmi'
import './helpers/_wagmi-client'
import { dutchAuctionContract } from '@web3/contracts/dutch-auction/use-dutch-auction'

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

export default async function handler(req: NextApiRequest, res: NextApiResponse<MintResponse>) {
  console.log('Calling mint')
  let { address, qty } = req.body

  qty = parseInt(qty)

  if (!ethers.utils.isAddress(address) || isNaN(qty)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Request Body',
    })
  }

  console.log('req.body is ok', process.env.NODE_ENV)
  let country_name: string | undefined, regionName: string | undefined, localityName: string | undefined

  try {
    const country = req.headers['x-vercel-ip-country']
    country_name = Array.isArray(country) ? country[0] : country

    const region = req.headers['x-vercel-ip-country-region']
    regionName = Array.isArray(region) ? region[0] : region

    const locality = req.headers['x-vercel-ip-city']
    localityName = Array.isArray(locality) ? locality[0] : locality

    console.log(country)
    console.log(region)
    console.log(locality)
    console.log(req.headers['x-real-ip'])

    if (!(process.env.NODE_ENV === 'development') && (!isAllowed(country_name) || !regionName)) {
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

  console.log('lets call contract')
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

  console.log('checking limit')
  if (totalAfterMint.gt(config.limitInWei)) {
    return res.status(400).json({
      success: false,
      message: 'Can not purchase more than limit',
    })
  }

  nonce = parseInt(rawNonce.toString())

  // store to supabase
  if (process.env.NODE_ENV === 'production') {
    console.log('storing on supabase')
    await supabase.from(process.env.SUPABASE_TABLE ?? '').insert({
      address,
      qty,
      price: ethers.utils.formatEther(currentPrice),
      // ip: ip as string,
      country: country_name,
      region: decodeURIComponent(regionName ?? ''),
      locality: decodeURIComponent(localityName ?? ''),
      // postalCode,
    })
  }

  console.log('start signing')
  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY as string)
  console.log('signerAddress', signer.address)
  const deadline = Math.floor(Date.now() / 1000) + 90 * 60
  const signature = await signBid(signer, process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS as string, {
    account: address,
    qty,
    nonce,
    deadline,
  })

  console.log('signed!')

  res.status(200).json({
    success: true,
    data: {
      deadline,
      signature: signature as Address,
      currentPrice: ethers.utils.formatEther(currentPrice),
    },
  })
}
