import { useQueries } from 'react-query'
import useMaschine from './use-maschine'

const refetchInterval = 10000

const useTotalSupply = () => {
  const maschineContract = useMaschine()

  const requestCurrentSupply = async () => maschineContract?.totalSupply?.()
  const requestMaxSupply = async () => maschineContract?.tokenIdMax?.()

  return useQueries([
    {
      queryKey: ['currentSupply'],
      queryFn: requestCurrentSupply,
      enabled: Boolean(maschineContract),
      refetchInterval,
    },
    {
      queryKey: ['maxSupply'],
      queryFn: requestMaxSupply,
      enabled: Boolean(maschineContract),
    },
  ])
}

export default useTotalSupply
