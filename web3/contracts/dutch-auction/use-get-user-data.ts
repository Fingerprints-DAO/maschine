import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { useMaschineContext } from '@ui/contexts/maschine'

const useGetUserData = () => {
  const dutchAuction = useDutchAuction()
  const { address } = useMaschineContext()

  const request = async () => {
    if (!address) {
      throw new Error('Wallet is not connected')
    }

    return dutchAuction?.getUserData?.(address)
  }

  return useQuery(['user-data'], request, { enabled: Boolean(dutchAuction) })
}

export default useGetUserData
