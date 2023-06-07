import IPData, { LookupResponse } from 'ipdata'

const ipdata = new IPData(process.env.IPDATA_API_KEY || '')

// prettier-ignore
const allowList = [
  'united states', 'us',
  'united kingdom', 'uk', 'gb',
  'austria', 'at',
  'belgium', 'be',
  'bulgaria', 'bg',
  'croatia', 'hr',
  'republic of cyprus', 'cy',
  'czech republic', 'cz',
  'denmark', 'dk',
  'estonia', 'ee',
  'finland', 'fi',
  'france', 'fr',
  'germany', 'de',
  'greece', 'gr',
  'hungary', 'hu',
  'ireland', 'ie',
  'italy', 'it',
  'latvia', 'lv',
  'lithuania', 'lt',
  'luxembourg', 'lu',
  'malta', 'mt',
  'netherlands', 'nl',
  'poland', 'pl',
  'portugal', 'pt',
  'romania', 'ro',
  'slovakia', 'sk',
  'slovenia', 'si',
  'spain', 'es',
  'sweden', 'se',
  'singapore', 'sg',
  'brazil', 'br',
  'japan', 'jp'
]

export const isAllowed = (country?: string) => (!country ? false : allowList.includes(country.toLowerCase()))

export const ipToLocation = async (ipAddress: string): Promise<LookupResponse> => {
  try {
    const info = await ipdata.lookup(ipAddress)

    return info
  } catch (error) {
    throw error
  }
}
