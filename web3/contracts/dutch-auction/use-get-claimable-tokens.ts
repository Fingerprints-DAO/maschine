import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { useMaschineContext } from '@ui/contexts/maschine'
import { Interval } from 'types/interval'

const useGetClaimableTokens = () => {
  const { address } = useMaschineContext()
  const dutchAuction = useDutchAuction()

  const request = async () => {
    if (!address) {
      throw new Error('Wallet is not connected')
    }

    return dutchAuction?.getClaimableTokens?.(address)
  }

  return useQuery(['claimable-tokens', 'count'], request, {
    enabled: Boolean(dutchAuction) && Boolean(address),
    cacheTime: 0,
    refetchInterval: Interval.ClaimableToken,
  })
}

export default useGetClaimableTokens
