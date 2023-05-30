import { Address, useContract, useSigner, useProvider } from 'wagmi'
import DutchAuctionContract from './abi'

export const dutchAuctionContract = {
  address: process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS as Address,
  abi: DutchAuctionContract,
}

const useDutchAuction = () => {
  const { data: signer } = useSigner()

  const provider = useProvider()

  const dutchAuction = useContract({
    ...dutchAuctionContract,
    signerOrProvider: signer || provider,
  })

  if (!dutchAuction) {
    return
  }

  return dutchAuction
}

export default useDutchAuction
