import IPData, { LookupResponse } from 'ipdata'

const ipdata = new IPData(process.env.IPDATA_API_KEY || '')

const allowList = [
  'United States',
  'United Kingdom',
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Republic of Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Ireland',
  'Italy',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Netherlands',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'Singapore',
  'Brazil',
  'Japan',
]

export const isAllowed = (country: string) => allowList.includes(country)

export const ipToLocation = async (ipAddress: string): Promise<LookupResponse> => {
  try {
    const info = await ipdata.lookup(ipAddress)

    return info
  } catch (error) {
    throw error
  }
}
