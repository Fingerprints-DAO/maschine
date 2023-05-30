import { Address, useContract, useSigner, useProvider } from 'wagmi'
import DutchAuctionContract from './abi'

const useDutchAuction = () => {
  const { data: signer } = useSigner()

  const provider = useProvider()

  const dutchAuction = useContract({
    abi: DutchAuctionContract,
    address: process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS as Address,
    signerOrProvider: signer || provider,
  })

  if (!dutchAuction) {
    return
  }

  return dutchAuction
}

export default useDutchAuction
