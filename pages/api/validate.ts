import type { NextApiRequest, NextApiResponse } from 'next'
import { isAllowed, ipToLocation } from './helpers/_ip'

export default async function handler(_: NextApiRequest, res: NextApiResponse<boolean>) {
  try {
    const response = await fetch('https://api.ipify.org', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' },
    })

    const ip = await response.text()

    const location = await ipToLocation(ip)

    console.log('location', location)

    return res.status(200).json(isAllowed(location.country_name))
  } catch (err) {
    return res.status(400).json(false)
  }
}
