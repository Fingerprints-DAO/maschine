import useTxToast from '@ui/hooks/use-tx-toast'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { Address, useWaitForTransaction } from 'wagmi'
import useErc721 from './use-erc721'

const perksContractAddress = process.env.NEXT_PUBLIC_PERKS_CONTRACT_ADDRESS || ''

const useErc721ApproveForAll = () => {
  const [isApproved, setIsApproved] = useState(false)
  const [hash, setHash] = useState<Address | undefined>()

  const erc721 = useErc721()
  const { showTxErrorToast, showTxExecutedToast } = useTxToast()

  const request = async () => {
    if (!erc721) {
      throw new Error()
    }

    return erc721.setApprovalForAll(perksContractAddress as Address, true)
  }

  useWaitForTransaction({
    hash,
    onSettled: (_, error) => {
      if (error) {
        showTxErrorToast(error)
        return
      }
      setIsApproved(true)

      showTxExecutedToast({
        title: 'Approval confirmed',
        txHash: hash,
        id: 'approval-success',
      })
    },
  })

  const approveMutation = useMutation(request, {
    onSuccess: (data) => {
      setHash(data?.hash as Address)
    },
    onError: (error: any) => {
      showTxErrorToast(error)
      setHash(undefined)
      setIsApproved(false)
    },
  })

  return {
    isApproved,
    approveMutation,
    hash,
  }
}

export default useErc721ApproveForAll
