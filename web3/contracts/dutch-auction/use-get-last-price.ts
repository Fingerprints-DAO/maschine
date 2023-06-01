import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import { NumberSettings } from 'types/number-settings'
import { useEffect, useState } from 'react'

const useGetLastPrice = () => {
  const request = async () => {
    // console.log('getting last price')
    const price = BigNumber(formatEther((await dutchAuction?.getSettledPriceInWei?.()) ?? 0))

    if (!price) return BigNumber(0)
    return price
  }

  const dutchAuction = useDutchAuction()
  const {
    data: price,
    status,
    refetch,
  } = useQuery(['last-price'], request, {
    enabled: Boolean(dutchAuction),
    cacheTime: 0,
  })
  const [lastPrice, setLastPrice] = useState('0')

  useEffect(() => {
    if (!price) return
    setLastPrice(price.toFormat(NumberSettings.Decimals, BigNumber.ROUND_UP))
  }, [price])

  return {
    lastPrice,
    lastPriceBN: price ?? BigNumber('0'),
    status,
    refetch,
  }
}

export default useGetLastPrice
