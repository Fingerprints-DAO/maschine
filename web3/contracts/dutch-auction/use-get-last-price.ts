import { useQuery } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import { useEffect, useState } from 'react'
import { formatBigNumberFloor } from 'utils/price'

const useGetLastPrice = () => {
  const request = async () => {
    // console.log('getting last price')
    const priceInWei = (await dutchAuction?.getSettledPriceInWei?.()) ?? 0
    const price = BigNumber(formatEther(priceInWei))
    setLastPriceInWei(priceInWei.toString())

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
  const [lastPriceInWei, setLastPriceInWei] = useState('0')

  useEffect(() => {
    if (!price) return
    setLastPrice(formatBigNumberFloor(price))
  }, [price])

  return {
    lastPrice,
    lastPriceBN: price ?? BigNumber('0'),
    lastPriceInWei,
    status,
    refetch,
  }
}

export default useGetLastPrice
