import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { Interval } from 'types/interval'

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
  const [countdown, setCountdown] = useState(0)

  const handleTime = useCallback(() => {
    let time = 0
    if (auctionState === AUCTION_STATE.NOT_STARTED) time = config?.startTime?.toNumber() ?? 0
    if (auctionState === AUCTION_STATE.STARTED) time = config?.endTime?.toNumber() ?? 0

    const minutes = handleMinutes(time ?? 0)

    setCountdown(minutes)
  }, [auctionState, config?.endTime, config?.startTime])

  useEffect(() => {
    const interval = setInterval(handleTime, Interval.Timer)
    handleTime()

    return () => {
      clearInterval(interval)
    }
  }, [handleTime])

  return {
    countdown,
  }
}

export default useCountdownTime
