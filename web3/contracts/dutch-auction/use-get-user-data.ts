import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { Address } from 'wagmi'

const useGetUserData = (address?: Address) => {
  const dutchAuction = useDutchAuction()

  const request = async () => {
    if (!address) {
      throw new Error('Wallet is not connected')
    }

    return dutchAuction?.getUserData?.(address)
  }

  return useQuery(['user-data'], request, {
    enabled: Boolean(dutchAuction) && Boolean(address),
    cacheTime: 0,
    retry: false,
  })
}

export default useGetUserData
