import type { NextApiRequest, NextApiResponse } from 'next'
import { isAllowed, ipToLocation } from './helpers/_ip'

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  try {
    const response = await fetch('https://api.ipify.org', {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' },
    })
    console.log('GET IP OK')
    console.log(req.headers['X-Vercel-IP-Country'])
    console.log(req.headers['X-Vercel-IP-Country-Region'])
    console.log(req.headers['X-Vercel-IP-City'])
    console.log(req.headers['x-real-ip'])
    const ip = await response.text()

    console.log(ip)
    console.log('Getting geolocation')
    const location = await ipToLocation(ip)

    console.log('Geolocation ok')
    return res.status(200).json(isAllowed(location.country_name))
  } catch (err) {
    console.error(err)
    return res.status(400).json(false)
  }
}
