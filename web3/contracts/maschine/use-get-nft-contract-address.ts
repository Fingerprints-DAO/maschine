import { useQuery } from 'react-query'
import { getNftContractAddressKey } from './keys'
import useMaschine from './use-maschine'

const useGetNftContractAddress = () => {
  const maschine = useMaschine()

  const request = async () => {
    const address = await maschine?.nftContractAddress()

    return address
  }

  return useQuery(getNftContractAddressKey, request)
}

export default useGetNftContractAddress
