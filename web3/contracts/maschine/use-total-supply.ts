import { useQueries } from 'react-query'
import useMaschine from './use-maschine'

const useTotalSupply = () => {
  const maschineContract = useMaschine()

  const requestCurrentSupply = async () => {
    return maschineContract?.totalSupply?.()
  }

  const requestMaxSupply = async () => {
    return maschineContract?.tokenIdMax?.()
  }

  return useQueries([
    {
      queryKey: ['currentSupply'],
      queryFn: requestCurrentSupply,
      enabled: Boolean(maschineContract),
    },
    {
      queryKey: ['maxSupply'],
      queryFn: requestMaxSupply,
      enabled: Boolean(maschineContract),
    },
  ])
}

export default useTotalSupply
