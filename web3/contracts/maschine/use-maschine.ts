import { Address, useContract, useProvider, useSigner } from 'wagmi'
import MaschineConctract from './abi'

const useMaschine = () => {
  const { data: signer } = useSigner()
  const provider = useProvider()

  const maschine = useContract({
    abi: MaschineConctract,
    address: process.env.NEXT_PUBLIC_MASCHINE_CONTRACT_ADDRESS as Address,
    signerOrProvider: signer || provider,
  })

  if (!maschine) {
    return
  }

  return maschine
}

export default useMaschine
