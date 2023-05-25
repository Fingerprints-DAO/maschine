import { Address, useContract, useSigner } from 'wagmi'
import DutchAuctionConctract from './abi'

const useDutchAuction = () => {
  const { data: signer } = useSigner()

  const dutchAuction = useContract({
    abi: DutchAuctionConctract,
    address: process.env.NEXT_PUBLIC_DUTCH_AUCTION_CONTRACT_ADDRESS as Address,
    signerOrProvider: signer,
  })

  if (!dutchAuction || !signer) {
    return
  }

  return dutchAuction
}

export default useDutchAuction
