import { fetcher } from '@ui/utils/fetcher'
import { useQuery } from 'react-query'
import { locationValidationKey } from './keys'

const useLocationValidation = () => {
  const request = async () => fetcher<boolean>('/api/validate')

  return useQuery(locationValidationKey, request)
}

export default useLocationValidation
