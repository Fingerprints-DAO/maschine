import { useMutation } from 'react-query'
import { Address } from 'wagmi'
import useDutchAuction from './use-dutch-auction'
import { BigNumber as BigNumberEthers, ethers } from 'ethers'
import BigNumber from 'bignumber.js'

type Payload = {
  qty: number
  deadline: BigNumber
  signature: Address
  price: string
}
const useBid = () => {
  const dutchAuction = useDutchAuction()

  const request = async ({ deadline, qty, signature, price }: Payload) => {
    // const gasPrice = (await dutchAuction?.provider.getGasPrice()) ?? BigNumber.from(0)

    return dutchAuction?.bid?.(qty, BigNumberEthers.from(deadline.toString()), signature, {
      value: ethers.utils.parseEther(price).mul(qty),
      // gasLimit: BigNumber.from(500000),
    })
  }

  return useMutation(request)
}

export default useBid
