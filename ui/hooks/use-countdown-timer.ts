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

export const displayCountdown = (endTime: number) => {
  const remainingSeconds = dayjs(timeToGo(endTime)).diff(dayjs(), 'seconds')
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const useCountdownTime = () => {
  const { config, auctionState } = useMaschineContext()
  const [countdown, setCountdown] = useState(0)
  const [countdownInMili, setCountdownInMili] = useState(0)

  const handleTime = useCallback(() => {
    let time = 0
    if (auctionState === AUCTION_STATE.NOT_STARTED) time = config?.startTime?.toNumber() ?? 0
    if (auctionState === AUCTION_STATE.STARTED) time = config?.endTime?.toNumber() ?? 0

    setCountdownInMili(time)
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
    countdownInMili,
  }
}

export default useCountdownTime
