import { Address, useContract, useSigner } from 'wagmi'
import MaschineConctract from './abi'

const useMaschine = () => {
  const { data: signer } = useSigner()

  const maschine = useContract({
    abi: MaschineConctract,
    address: process.env.NEXT_PUBLIC_MASCHINE_CONTRACT_ADDRESS as Address,
    signerOrProvider: signer,
  })

  if (!maschine || !signer) {
    return
  }

  return maschine
}

export default useMaschine
