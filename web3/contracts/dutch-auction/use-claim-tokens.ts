import { useMutation } from 'react-query'
import useDutchAuction from './use-dutch-auction'

const useClaimTokens = () => {
  const dutchAuction = useDutchAuction()

  const request = async (amount: number) => dutchAuction?.claimTokens?.(amount)

  return useMutation(request)
}

export default useClaimTokens
