import { fetcher } from '@ui/utils/fetcher'
import { MintResponse } from 'pages/api/mint'
import { useMutation } from 'react-query'
import { Address } from 'wagmi'

type Payload = {
  address: Address
  qty: number
}

const useMint = () => {
  const request = async (payload: Payload) => {
    return fetcher<MintResponse>('/api/mint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  }

  return useMutation(request)
}

export default useMint
