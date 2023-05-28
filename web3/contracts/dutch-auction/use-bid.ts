import { useMutation } from 'react-query'
import { Address } from 'wagmi'
import useDutchAuction from './use-dutch-auction'
import { BigNumber } from 'ethers'

type Payload = {
  qty: number
  deadline: BigNumber
  signature: Address
}

const useBid = () => {
  const dutchAuction = useDutchAuction()

  const request = async ({ deadline, qty, signature }: Payload) => dutchAuction?.bid?.(qty, deadline, signature)

  return useMutation(request)
}

export default useBid
