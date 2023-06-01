import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import { NumberSettings } from 'types/number-settings'
import { Interval } from 'types/interval'
import { useEffect, useState } from 'react'

const useGetCurrentPrice = () => {
  const request = async () => {
    console.log('getting price')
    const price = BigNumber(formatEther((await dutchAuction?.getCurrentPriceInWei?.()) ?? 0))

    if (!price) return BigNumber(0)
    return price
  }

  const dutchAuction = useDutchAuction()
  const { data: price, status } = useQuery(['current-price'], request, {
    enabled: Boolean(dutchAuction),
    cacheTime: 0,
    refetchInterval: Interval.Timer,
  })
  const [currentPrice, setCurrentPrice] = useState('0')

  useEffect(() => {
    if (!price) return
    setCurrentPrice(price.toFormat(NumberSettings.Decimals, BigNumber.ROUND_UP))
  }, [price])

  return {
    currentPrice,
    price: price ?? BigNumber('0'),
    status,
  }
}

export default useGetCurrentPrice
