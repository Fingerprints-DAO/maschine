import type { NextApiRequest, NextApiResponse } from 'next'
import { isAllowed, ipToLocation } from './helpers/_ip'

type ValidateResponse = {
  success: boolean
  valid: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ValidateResponse>) {
  let ip = req.headers['x-real-ip']
  if (!ip) {
    const forwardedFor = req.headers['x-forwarded-for']
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor.at(0)
    } else {
      ip = forwardedFor?.split(',').at(0) ?? 'Unknown'
    }
  }

  try {
    const location = await ipToLocation(ip as string)
    return res.status(400).json({
      success: true,
      valid: isAllowed(location.addressCountry)
    })
  } catch (err) {
    return res.status(400).json({
      success: false,
      valid: false,
    })
  }
}
