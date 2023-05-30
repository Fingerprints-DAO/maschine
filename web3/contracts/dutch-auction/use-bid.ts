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
    // Estimate gas required for the transaction
    const gasLimit =
      (await dutchAuction?.estimateGas.bid(qty, deadline, signature, { value: ethers.utils.parseEther(price).mul(qty) })) ?? BigNumber.from(0)
    const gasPrice = (await dutchAuction?.provider.getGasPrice()) ?? BigNumber.from(0)
    const gasLimitBuffer = Math.floor(gasLimit.toNumber() * 1.5)
    const gasPriceBuffer = gasPrice.mul(105).div(100)

    // Execute transaction using estimated gas price and limit
    return dutchAuction?.bid?.(qty, deadline, signature, {
      value: ethers.utils.parseEther(price).mul(qty),
      gasLimit: BigNumber.from(gasLimitBuffer),
      gasPrice: gasPriceBuffer,
    })
  }

  return useMutation(request)
}

export default useBid
