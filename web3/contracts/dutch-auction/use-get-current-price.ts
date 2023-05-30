import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { ethers } from 'ethers'

const useGetCurrentPrice = () => {
  const dutchAuction = useDutchAuction()

  const request = async () => {
    const price = await dutchAuction?.getCurrentPriceInWei?.()

    if (!price) {
      return
    }

    return ethers.utils.formatUnits(price, 18)
  }

  return useQuery(['current-price'], request, { enabled: Boolean(dutchAuction), cacheTime: 0 })
}

export default useGetCurrentPrice
