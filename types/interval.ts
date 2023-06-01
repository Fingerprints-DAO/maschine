import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export enum Interval {
  TotalSupply = dayjs.duration(10, 'seconds').asMilliseconds(),
  Timer = dayjs.duration(12, 'seconds').asMilliseconds(),
  ClaimableToken = dayjs.duration(1, 'minute').asMilliseconds(),
}
