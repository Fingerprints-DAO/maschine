import { useQuery } from 'react-query'
import useMaschine from './use-maschine'

const useTotalSupply = () => {
  const maschineContract = useMaschine()

  const requestCurrentSupply = async () => {
    return maschineContract?.totalSupply()
  }

  const requestMaxSupply = async () => {
    return maschineContract?.tokenIdMax()
  }

  return [
    useQuery(['currentSupply'], requestCurrentSupply, { enabled: Boolean(maschineContract) }),
    useQuery(['maxSupply'], requestMaxSupply, { enabled: Boolean(maschineContract) }),
  ]
}

export default useTotalSupply
