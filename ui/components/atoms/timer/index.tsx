import React, { useState, useEffect, memo } from 'react'
import dayjs from 'dayjs'

type CountdownTimerProps = {
  endDate?: dayjs.Dayjs
}

function formatTime(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = Math.floor((milliseconds % 60000) / 1000)
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime())

  function calculateRemainingTime() {
    const currentTime = dayjs()
    const timeDiff = endDate?.diff(currentTime)

    if (!timeDiff) {
      return 0
    }

    return Math.max(0, timeDiff) // Ensure remaining time is never negative
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime())
    }, 1000) // Update every second

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>{formatTime(remainingTime)}</h2>
    </div>
  )
}

export default memo(CountdownTimer)
