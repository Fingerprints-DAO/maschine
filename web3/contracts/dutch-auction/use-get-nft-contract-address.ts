import { useQuery } from 'react-query'
import { getNftContractAddressKey } from './keys'
import useDutchAuction from './use-dutch-auction'

const useGetNftContractAddress = () => {
  const dutchAuction = useDutchAuction()

  const request = async () => {
    const address = await dutchAuction?.nftContractAddress()

    return address
  }

  return useQuery(getNftContractAddressKey, request)
}

export default useGetNftContractAddress
