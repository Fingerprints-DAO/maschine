import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { useMaschineContext } from '@ui/contexts/maschine'

const useGetUserData = () => {
  const dutchAuction = useDutchAuction()
  const { address } = useMaschineContext()

  const request = async () => dutchAuction?.getUserData?.(address!)

  return useQuery(['user-data'], request, { enabled: Boolean(dutchAuction) && Boolean(address), cacheTime: 0 })
}

export default useGetUserData
