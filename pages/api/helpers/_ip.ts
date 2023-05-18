import { SuperfaceClient } from '@superfaceai/one-sdk'

type Location = {
  ipAddress: string
  addressCountryCode: string
  addressCountry: string
  addressRegion: string
  addressLocality: string
  postalCode: string
  timeZone: string
  latitude: number
  longitude: number
}

const sdk = new SuperfaceClient()

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

export const ipToLocation = async (ipAddress: string): Promise<Location> => {
  const profile = await sdk.getProfile('address/ip-geolocation@1.0.1')

  const result = await profile.getUseCase('IpGeolocation').perform(
    {
      ipAddress,
    },
    {
      provider: 'ipdata',
      security: {
        apikey: {
          apikey: '9a511b6fc8334e1852cfbbd4ff3f1af3c42ed6abc75e96a1648b969a',
        },
      },
    }
  )

  // Handle the result
  try {
    return result.unwrap() as Location
  } catch (error) {
    throw error
  }
}
