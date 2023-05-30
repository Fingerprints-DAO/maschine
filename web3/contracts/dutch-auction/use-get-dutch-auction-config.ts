import { getDutchActionKey } from './keys'
import useDutchAuction from './use-dutch-auction'
import { useQuery } from 'react-query'

const useGetDutchAuctionConfig = () => {
  const dutchAuction = useDutchAuction()

  const request = async () => dutchAuction?.getConfig?.()

  return useQuery(getDutchActionKey, request, { enabled: Boolean(dutchAuction), cacheTime: 0 })
}

export default useGetDutchAuctionConfig
