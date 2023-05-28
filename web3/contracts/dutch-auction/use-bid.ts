import { useMutation } from 'react-query'
import { Address } from 'wagmi'
import useDutchAuction from './use-dutch-auction'
import { BigNumber, ethers } from 'ethers'

type Payload = {
  qty: number
  deadline: BigNumber
  signature: Address
  price: string
}

const useBid = () => {
  const dutchAuction = useDutchAuction()

  const request = async ({ deadline, qty, signature, price }: Payload) =>
    dutchAuction?.bid?.(qty, deadline, signature, { value: ethers.utils.parseEther(price).mul(qty) })

  return useMutation(request)
}

export default useBid
