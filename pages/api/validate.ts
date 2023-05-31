import type { NextApiRequest, NextApiResponse } from 'next'
import { isAllowed } from './helpers/_ip'

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  if (process.env.NODE_ENV === 'development') return res.status(200).json(true)

  try {
    // const response = await fetch('https://api.ipify.org', {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'text/plain' },
    // })
    // console.log('GET IP OK')
    const country = req.headers['x-vercel-ip-country']
    const country_name = Array.isArray(country) ? country[0] : country

    const region = req.headers['x-vercel-ip-country-region']
    const regionName = Array.isArray(region) ? region[0] : region

    console.log(country)
    console.log(regionName)
    console.log(req.headers['x-vercel-ip-city'])
    console.log(req.headers['x-real-ip'])
    // const ip = await response.text()

    // console.log(ip)
    // console.log('Getting geolocation')
    // const location = await ipToLocation(ip)

    console.log('Geolocation ok')
    if (!country_name || (country_name.toLowerCase() === 'us' && !regionName)) {
      return res.status(400).json(false)
    }
    return res.status(200).json(isAllowed(country_name))
  } catch (err) {
    console.error(err)
    return res.status(400).json(false)
  }
}
