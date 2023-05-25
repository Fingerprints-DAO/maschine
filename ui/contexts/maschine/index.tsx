import useGetDutchAuctionConfig from '@web3/contracts/dutch-auction/use-get-dutch-auction-config'
import useGetNftContractAddress from '@web3/contracts/dutch-auction/use-get-nft-contract-address'
import useLocationValidation from '@web3/maschine/use-location-validation'
import { BigNumber } from 'ethers'
import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Address, useAccount, useEnsName } from 'wagmi'

type MaschineContextState = {
  isConnected: boolean
  address?: Address
  nftContractAddress?: Address
  ensName?: string | null
  canInteract: boolean
  config?: Partial<{
    startAmountInWei: BigNumber
    endAmountInWei: BigNumber
    limitInWei: BigNumber
    refundDelayTime: number
    startTime: BigNumber
    endTime: BigNumber
  }>
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
  const { data: config } = useGetDutchAuctionConfig()
  const { data: nftContractAddress } = useGetNftContractAddress()
  const { data: ensName } = useEnsName({ address, enabled: Boolean(address) })

  const value: MaschineContextState = useMemo(() => {
    return {
      address,
      isConnected,
      ensName,
      canInteract: canInteract ?? DEFAULT_CONTEXT.canInteract,
      nftContractAddress,
      config,
    }
  }, [address, isConnected, ensName, canInteract, nftContractAddress, config])

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
