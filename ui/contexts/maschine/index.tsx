import useGetNftContractAddress from '@web3/contracts/maschine/use-get-nft-contract-address'
import useLocationValidation from '@web3/maschine/use-location-validation'
import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Address, useAccount, useEnsName } from 'wagmi'

type MaschineContextState = {
  isConnected: boolean
  address?: Address
  nftContractAddress?: Address
  ensName?: string | null
  canInteract: boolean
}

const DEFAULT_CONTEXT = {
  isAdmin: false,
  isAdminOrEditor: false,
  isEditor: false,
  isConnected: false,
  isUnavailabilityWarningVisible: false,
  canInteract: true,
} as MaschineContextState

const MaschineContext = createContext(DEFAULT_CONTEXT)

const MaschineProvider = ({ children }: PropsWithChildren) => {
  const { address, isConnected } = useAccount()
  const { data: canInteract } = useLocationValidation()
  const { data: nftContractAddress } = useGetNftContractAddress()
  const { data: ensName } = useEnsName({ address, enabled: Boolean(address) })

  const value: MaschineContextState = useMemo(
    () => ({
      address,
      isConnected,
      ensName,
      canInteract: canInteract ?? DEFAULT_CONTEXT.canInteract,
      nftContractAddress,
    }),
    [address, isConnected, ensName, canInteract, nftContractAddress]
  )

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
