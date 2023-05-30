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

  const request = async ({ deadline, qty, signature, price }: Payload) => {
    const gasPrice = (await dutchAuction?.provider.getGasPrice()) ?? BigNumber.from(0)
    const gasLimit = BigNumber.from(5000000)
    const gasPriceBuffer = gasPrice.mul(105).div(100)

    return dutchAuction?.bid?.(qty, deadline, signature, {
      value: ethers.utils.parseEther(price).mul(qty),
      gasLimit,
      gasPrice: gasPriceBuffer,
    })
  }

  return useMutation(request)
}

export default useBid
