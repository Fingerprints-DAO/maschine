import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { formatEther } from 'ethers/lib/utils.js'
import { useCallback, useEffect, useState } from 'react'
import { Interval } from 'types/interval'
import { NumberSettings } from 'types/number-settings'

const INTERVAL = Interval.Timer
const BIGZERO = BigNumber(0)

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
  const [currentPrice, setCurrentPrice] = useState(BIGZERO)
  const [countdown, setCountdown] = useState(0)

  const handlePrice = useCallback(() => {
    if (!config?.startTime || !config.endTime || !config.startAmountInWei) {
      return BIGZERO
    }

    const currentTime = dayjs()
    const startTime = dayjs.unix(config?.startTime?.toNumber())
    const endTime = dayjs.unix(config?.endTime?.toNumber())
    const diffTime = endTime.diff(startTime)
    const elapsedTime = currentTime.diff(dayjs.unix(config?.startTime?.toNumber()))

    const percentage = elapsedTime / diffTime

    const startPrice = BigNumber(formatEther(config.startAmountInWei))

    // Calculate the adjusted end price
    const price = startPrice.minus(startPrice.multipliedBy(percentage))

    return price
  }, [config?.startAmountInWei, config?.endTime, config?.startTime])

  const handleTime = useCallback(
    (interval: number) => {
      let time = 0
      if (auctionState === AUCTION_STATE.NOT_STARTED) time = config?.startTime?.toNumber() ?? 0
      if (auctionState === AUCTION_STATE.STARTED) time = config?.endTime?.toNumber() ?? 0

      const minutes = handleMinutes(time ?? 0)
      const price = handlePrice()
      const endPrice = BigNumber(formatEther(config?.endAmountInWei ?? '0'))
      const startPrice = BigNumber(formatEther(config?.startAmountInWei ?? '0'))

      if (minutes <= 0 && price.lte(endPrice)) {
        clearInterval(interval)
        return
      }

      setCountdown(minutes)
      if (auctionState === AUCTION_STATE.NOT_STARTED) return setCurrentPrice(startPrice)

      // Check if the countdown timer has ended
      if (price.lte(endPrice)) {
        clearInterval(interval)

        return setCurrentPrice(endPrice)
      }

      setCurrentPrice(price)
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
    currentPrice: currentPrice.toFormat(NumberSettings.Decimals, BigNumber.ROUND_UP),
    currentPriceBN: currentPrice,
  }
}

export default useCountdownTime
