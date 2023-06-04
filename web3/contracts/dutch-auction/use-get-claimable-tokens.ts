import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { useMaschineContext } from '@ui/contexts/maschine'
import { Interval } from 'types/interval'
import { useEffect, useState } from 'react'

const useGetClaimableTokens = () => {
  const [claimableCount, setClaimableCount] = useState(0)
  const { address } = useMaschineContext()
  const dutchAuction = useDutchAuction()

  const request = async () => {
    if (!address) {
      throw new Error('Wallet is not connected')
    }

    const claimableTokens = await dutchAuction?.getClaimableTokens?.(address)
    return claimableTokens
  }

  const { data: tokens = 0 } = useQuery('claimable-tokens', request, {
    enabled: Boolean(dutchAuction) && Boolean(address),
    cacheTime: 0,
    refetchInterval: Interval.ClaimableToken,
  })

  useEffect(() => {
    setClaimableCount(tokens)
  }, [tokens])

  return { claimableCount }
}

export default useGetClaimableTokens
