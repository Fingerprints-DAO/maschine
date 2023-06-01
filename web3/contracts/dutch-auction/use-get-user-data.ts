import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { Address } from 'wagmi'
import { BigNumber } from 'ethers'

const useGetUserData = (address?: Address) => {
  const dutchAuction = useDutchAuction()

  const request = async () => {
    if (!address) {
      throw new Error('Wallet is not connected')
    }
    const userBidData = await dutchAuction?.getUserData?.(address)
    const { contribution = BigNumber.from(0), refundClaimed = false, tokensBidded = 0 } = userBidData ?? {}

    return {
      contribution,
      refundClaimed,
      tokensBidded,
    }
  }

  return useQuery(['user-data'], request, {
    enabled: Boolean(dutchAuction) && Boolean(address),
    cacheTime: 0,
    // retry: false,
  })
}

export default useGetUserData
