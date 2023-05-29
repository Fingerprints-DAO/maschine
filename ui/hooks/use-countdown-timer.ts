import { useMaschineContext } from '@ui/contexts/maschine'
import dayjs from 'dayjs'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

const INTERVAL = 60000
// const INTERVAL = 1000

const timeToGo = (time: number) => {
  if (!time) {
    return
  }

  const endDateUnix = dayjs.unix(time)

  return endDateUnix
}

const handleMinutes = (time: number) => {
  const currentTime = dayjs()
  const remainingTime = dayjs(time).diff(currentTime, 'seconds')

  if (remainingTime <= 0) {
    return 0
  }

  const minutes = Math.ceil(remainingTime / 60)

  return minutes
}

const useCountdownTime = () => {
  const { config } = useMaschineContext()
  const [currentPrice, setCurrentPrice] = useState('')
  const [countdown, setCountdown] = useState<number>(handleMinutes(config?.endTime?.toNumber() ?? 0))

  const handlePrice = useCallback(() => {
    if (!config?.startTime || !config.endTime || !config.startAmountInWei) {
      return 0
    }

    const currentTime = dayjs()
    const endTime = dayjs.unix(config?.endTime?.toNumber())
    const totalTime = endTime.diff(dayjs.unix(config?.startTime?.toNumber()))
    const elapsedTime = currentTime.diff(dayjs.unix(config?.startTime?.toNumber()))

    const percentage = elapsedTime / totalTime

    const startPrice = Number(ethers.utils.formatUnits(config.startAmountInWei, 18))

    // Calculate the adjusted end price
    const price = startPrice - startPrice * percentage

    return price
  }, [config?.startAmountInWei, config?.endTime, config?.startTime])

  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = handleMinutes(config?.endTime?.toNumber() ?? 0)
      const price = handlePrice()
      const endPrice = !!config?.endAmountInWei ? ethers.utils.formatUnits(config?.endAmountInWei, 18) : ''

      if (minutes <= 0 && price <= Number(endPrice)) {
        clearInterval(interval)
        return
      }

      setCountdown(minutes)

      if (!!config?.endAmountInWei) {
        const endPrice = ethers.utils.formatUnits(config.endAmountInWei, 18)

        // Check if the countdown timer has ended
        if (price <= Number(endPrice)) {
          clearInterval(interval)

          return setCurrentPrice(ethers.utils.formatUnits(config.endAmountInWei, 18))
        } else {
          const eth = ethers.utils.parseEther(price.toString())

          setCurrentPrice(ethers.utils.formatUnits(eth, 18))
        }
      }
    }, INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [handlePrice, config?.endAmountInWei, config?.endTime])

  useEffect(() => {
    if (config?.startAmountInWei) {
      setCurrentPrice(ethers.utils.formatUnits(config?.startAmountInWei, 18))
    }
  }, [config?.startAmountInWei])

  return {
    countdown,
    currentPrice,
  }
}

export default useCountdownTime
