import { useMutation } from 'react-query'
import useDutchAuction from './use-dutch-auction'
import { BigNumber } from 'ethers'

const useClaimTokens = () => {
  const dutchAuction = useDutchAuction()

  const request = async (amount: number) => {
    // Define gasLimit initially
    let gasLimit = BigNumber.from(500000)

    if (dutchAuction) {
      try {
        // Estimate the gas usage for your transaction
        const estimate = await dutchAuction.estimateGas.claimTokens(amount)

        // Set the gasLimit as estimatedGas * 1.2 (for 20% extra buffer)
        gasLimit = estimate.mul(130).div(100)
      } catch (err) {
        console.log('Failed to estimate gas: ', err)
      }
    }

    return dutchAuction?.claimTokens?.(amount, {
      gasLimit: gasLimit,
    })
  }
  return useMutation(request)
}

export default useClaimTokens
