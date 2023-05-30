import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import dayjs from 'dayjs'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

// const INTERVAL = 60000
const INTERVAL = 1000

const timeToGo = (time: number) => {
  const endDateUnix = dayjs.unix(time)
  return endDateUnix
}

const handleMinutes = (time: number) => {
  const currentTime = dayjs()
  const remainingTime = dayjs(timeToGo(time)).diff(currentTime, 'seconds')

  if (remainingTime <= 0) {
    return 0
  }
  const minutes = Math.ceil(remainingTime / 60)
  return minutes
}

const useCountdownTime = () => {
  const { config, auctionState } = useMaschineContext()
  const [currentPrice, setCurrentPrice] = useState('')
  const [countdown, setCountdown] = useState(0)

  const handlePrice = useCallback(() => {
    if (!config?.startTime || !config.endTime || !config.startAmountInWei) {
      return 0
    }

    const currentTime = dayjs()
    const startTime = dayjs.unix(config?.startTime?.toNumber())
    const endTime = dayjs.unix(config?.endTime?.toNumber())
    const diffTime = endTime.diff(startTime)
    const elapsedTime = currentTime.diff(dayjs.unix(config?.startTime?.toNumber()))

    const percentage = elapsedTime / diffTime

    const startPrice = Number(ethers.utils.formatUnits(config.startAmountInWei, 18))

    // Calculate the adjusted end price
    const price = startPrice - startPrice * percentage

    return price
  }, [config?.startAmountInWei, config?.endTime, config?.startTime])

  const handleTime = useCallback(
    (interval: number) => {
      let time = 0
      if (auctionState === AUCTION_STATE.NOT_STARTED) time = config?.startTime?.toNumber() ?? 0
      if (auctionState === AUCTION_STATE.STARTED) time = config?.endTime?.toNumber() ?? 0

      const minutes = handleMinutes(time ?? 0)
      const price = handlePrice()
      const endPrice = !!config?.endAmountInWei ? ethers.utils.formatUnits(config?.endAmountInWei, 18) : ''

      if (minutes <= 0 && price <= Number(endPrice)) {
        clearInterval(interval)
        return
      }

      setCountdown(minutes)
      if (auctionState === AUCTION_STATE.NOT_STARTED)
        return setCurrentPrice(!!config?.startAmountInWei ? ethers.utils.formatUnits(config?.startAmountInWei, 18) : '')

      // Check if the countdown timer has ended
      if (price <= Number(endPrice)) {
        clearInterval(interval)

        return setCurrentPrice(endPrice)
      }

      const eth = ethers.utils.parseEther(price.toString())
      setCurrentPrice(ethers.utils.formatUnits(eth, 18))
    },
    [auctionState, config?.endAmountInWei, config?.endTime, config?.startAmountInWei, config?.startTime, handlePrice]
  )

  useEffect(() => {
    const interval = setInterval(handleTime, INTERVAL)
    handleTime(interval)

    return () => {
      clearInterval(interval)
    }
  }, [handleTime])

  return {
    countdown,
    currentPrice,
  }
}

export default useCountdownTime
