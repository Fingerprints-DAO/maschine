import { ethers } from 'ethers'
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import signBid from './helpers/_sign'
import { isAllowed, ipToLocation } from './helpers/_ip'
import ABI from './_abi/auction.json'

const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '')

type MintData = {
  deadline: number
  signature: string
}

type MintResponse = {
  success: boolean
  message?: string
  data?: MintData
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<MintResponse>) {
  let ip = req.headers['x-real-ip']
  if (!ip) {
    const forwardedFor = req.headers['x-forwarded-for']
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor.at(0)
    } else {
      ip = forwardedFor?.split(',').at(0) ?? 'Unknown'
    }
  }

  let { address, qty } = req.body
  qty = parseInt(qty)
  if (!ethers.utils.isAddress(address) || isNaN(qty)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Request Body',
    })
  }

  try {
    const location = await ipToLocation(ip as string)

    // store to supabase
    await supabase.from('countries').insert({ address, qty, ip: ip as string, country: location.addressCountry })

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

  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL, parseInt(process.env.CHAIN_ID as string))
  const auction = new ethers.Contract(process.env.AUCTION_CONTRACT as string, ABI, provider)
  let nonce = 0
  try {
    const rawNonce = await auction.getNonce(address)
    nonce = parseInt(rawNonce.toString())
  } catch {}

  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY as string)
  const deadline = Math.floor(Date.now() / 1000) + 90 * 60
  const signature = await signBid(signer, auction.address, {
    account: address,
    qty,
    nonce,
    deadline,
  })

  res.status(200).json({
    success: true,
    data: {
      deadline,
      signature,
    },
  })
}
