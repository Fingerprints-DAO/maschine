import { useQuery } from 'react-query'
import useMaschine from './use-maschine'

const refetchInterval = 10000

const useTotalSupply = () => {
  const maschineContract = useMaschine()

  const requestCurrentSupply = async () => {
    return maschineContract?.totalSupply()
  }

  const requestMaxSupply = async () => {
    return maschineContract?.tokenIdMax()
  }

  return [
    useQuery(['currentSupply'], requestCurrentSupply, { enabled: Boolean(maschineContract), refetchInterval }),
    useQuery(['maxSupply'], requestMaxSupply, { enabled: Boolean(maschineContract) }),
  ]
}

export default useTotalSupply
