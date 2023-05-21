import { Address, useContract, useSigner } from 'wagmi'
import ERC721Contract from './abi'
import { useMaschineContext } from '@ui/contexts/maschine'

const useErc721 = () => {
  const { data: signer } = useSigner()
  const { nftContractAddress } = useMaschineContext()

  const erc721 = useContract({
    abi: ERC721Contract,
    address: nftContractAddress as Address,
    signerOrProvider: signer,
  })

  if (!erc721 || !signer) {
    return
  }

  return erc721
}

export default useErc721
