import type { NextApiRequest, NextApiResponse } from 'next'
import { isAllowed, ipToLocation } from './helpers/_ip'

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  try {
    const response = await fetch('https://api.ipify.org', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' },
    })
    console.log('GET IP OK')
    const ip = await response.text()

    console.log('Getting geolocation')
    const location = await ipToLocation(ip)

    console.log('Geolocation ok')
    return res.status(200).json(isAllowed(location.country_name))
  } catch (err) {
    console.error(err)
    return res.status(400).json(false)
  }
}
