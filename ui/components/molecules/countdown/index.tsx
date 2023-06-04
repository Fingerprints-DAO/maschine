import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

interface CountdownProps {
  futureTimestamp: number
}

const Countdown = ({ futureTimestamp }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs()
      const future = dayjs.unix(futureTimestamp)
      const diff = future.diff(now)

      if (diff <= 0) {
        clearInterval(intervalId)
        setTimeLeft('00:00')
      } else {
        const duration = dayjs.duration(diff)
        const minutes = duration.minutes().toString().padStart(2, '0')
        const seconds = duration.seconds().toString().padStart(2, '0')
        setTimeLeft(`${minutes}:${seconds}`)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [futureTimestamp])

  return <span>{timeLeft}</span>
}

export default Countdown
