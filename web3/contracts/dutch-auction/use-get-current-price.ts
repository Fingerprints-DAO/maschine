import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import BigNumber from 'bignumber.js'
import { formatEther, parseEther } from 'ethers/lib/utils.js'
import { NumberSettings } from 'types/number-settings'
import { Interval } from 'types/interval'
import { useEffect, useState } from 'react'
import { formatBigNumberUp } from 'utils/price'

const useGetCurrentPrice = () => {
  const [currentPrice, setCurrentPrice] = useState('0')
  const dutchAuction = useDutchAuction()

  const request = async () => {
    // console.log('getting price')
    const price = BigNumber(formatEther((await dutchAuction?.getCurrentPriceInWei?.()) ?? 0))

    if (!price) return BigNumber(0)
    return price
  }

  const { data: price, status } = useQuery(['current-price'], request, {
    enabled: Boolean(dutchAuction),
    cacheTime: 0,
    refetchInterval: Interval.TotalSupply,
  })

  useEffect(() => {
    if (!price) return
    setCurrentPrice(formatBigNumberUp(price))
  }, [price])

  return {
    currentPrice,
    price: price ?? BigNumber('0'),
    priceEther: parseEther(currentPrice).toString(),
    status,
  }
}

export default useGetCurrentPrice
