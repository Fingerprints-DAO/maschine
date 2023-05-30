import useGetDutchAuctionConfig from '@web3/contracts/dutch-auction/use-get-dutch-auction-config'
import useGetNftContractAddress from '@web3/contracts/dutch-auction/use-get-nft-contract-address'
import useLocationValidation from '@web3/maschine/use-location-validation'
import dayjs from 'dayjs'
import { BigNumber } from 'ethers'
import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Address, useAccount, useEnsName } from 'wagmi'

export enum AUCTION_STATE {
  NOT_STARTED,
  STARTED,
  SOLD_OUT,
  ENDED,
}

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
  auctionState: AUCTION_STATE
}

const DEFAULT_CONTEXT = {
  isAdmin: false,
  isAdminOrEditor: false,
  isEditor: false,
  isConnected: false,
  isUnavailabilityWarningVisible: false,
  canInteract: true,
  auctionState: AUCTION_STATE.NOT_STARTED,
} as MaschineContextState

const MaschineContext = createContext(DEFAULT_CONTEXT)

const getCurrentState = (startTime?: number, endTime?: number) => {
  if (!startTime || !endTime) return AUCTION_STATE.NOT_STARTED

  const now = dayjs()
  const start = dayjs.unix(startTime)
  const end = dayjs.unix(endTime)

  if (now.isAfter(end)) return AUCTION_STATE.ENDED
  if (now.isAfter(start)) return AUCTION_STATE.STARTED

  return AUCTION_STATE.NOT_STARTED
}

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
      auctionState: getCurrentState(config?.startTime?.toNumber(), config?.endTime?.toNumber()),
    }
  }, [address, isConnected, ensName, canInteract, nftContractAddress, config])

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
