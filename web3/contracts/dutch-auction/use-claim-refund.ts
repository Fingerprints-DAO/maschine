import { useMutation } from 'react-query'
import useDutchAuction from './use-dutch-auction'

const useClaimRefund = () => {
  const dutchAuction = useDutchAuction()

  const request = async () => dutchAuction?.claimRefund?.()

  return useMutation(request)
}

export default useClaimRefund
