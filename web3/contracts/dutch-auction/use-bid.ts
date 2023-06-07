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
    let gasLimit = BigNumberEthers.from(500000)

    if (dutchAuction) {
      try {
        // Estimate the gas usage for your transaction
        const estimate = await dutchAuction.estimateGas.bid(qty, BigNumberEthers.from(deadline.toString()), signature, {
          value: ethers.utils.parseEther(price).mul(qty),
        })

        // Set the gasLimit as estimatedGas * 1.2 (for 20% extra buffer)
        gasLimit = estimate.mul(130).div(100)
      } catch (err) {
        console.log('Failed to estimate gas: ', err)
      }
    }

    return dutchAuction?.bid?.(qty, BigNumberEthers.from(deadline.toString()), signature, {
      value: ethers.utils.parseEther(price).mul(qty),
      gasLimit: gasLimit,
    })
  }

  return useMutation(request)
}

export default useBid
