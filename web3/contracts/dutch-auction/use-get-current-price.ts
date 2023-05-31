import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import { NumberSettings } from 'types/number-settings'

const useGetCurrentPrice = () => {
  const dutchAuction = useDutchAuction()

  const request = async () => {
    const price = BigNumber(formatEther((await dutchAuction?.getCurrentPriceInWei?.()) ?? 0))

    if (!price) {
      return {
        price: '0',
        priceBN: BigNumber(0),
      }
    }

    return { price: price.toFormat(NumberSettings.Decimals, BigNumber.ROUND_UP), priceBN: price }
  }

  return useQuery(['current-price'], request, { enabled: Boolean(dutchAuction), cacheTime: 0 })
}

export default useGetCurrentPrice
