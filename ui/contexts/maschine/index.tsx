import useGetDutchAuctionConfig from '@web3/contracts/dutch-auction/use-get-dutch-auction-config'
import useGetNftContractAddress from '@web3/contracts/dutch-auction/use-get-nft-contract-address'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import useTotalSupply from '@web3/contracts/maschine/use-total-supply'
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
  canInteract: boolean
  isLimitReached: boolean
  auctionState: AUCTION_STATE
  address?: Address
  nftContractAddress?: Address
  ensName?: string | null
  config?: Partial<{
    startAmountInWei: BigNumber
    endAmountInWei: BigNumber
    limitInWei: BigNumber
    refundDelayTime: number
    startTime: BigNumber
    endTime: BigNumber
  }>
  currentSupply?: BigNumber
  maxSupply?: number
}

const DEFAULT_CONTEXT = {
  isConnected: false,
  isLimitReached: false,
  canInteract: true,
  auctionState: AUCTION_STATE.NOT_STARTED,
} as MaschineContextState

const MaschineContext = createContext(DEFAULT_CONTEXT)

const getCurrentState = (startTime?: number, endTime?: number, currentSupply?: number, maxSupply?: number) => {
  if (!startTime || !endTime) return AUCTION_STATE.NOT_STARTED
  if ((currentSupply || 0) >= (maxSupply || 0)) return AUCTION_STATE.SOLD_OUT

  const now = dayjs()
  const start = dayjs.unix(startTime)
  const end = dayjs.unix(endTime)

  if (now.isAfter(end)) return AUCTION_STATE.ENDED
  if (now.isAfter(start)) return AUCTION_STATE.STARTED

  return AUCTION_STATE.NOT_STARTED
}

const MaschineProvider = ({ children }: PropsWithChildren) => {
  const { address, isConnected } = useAccount()
  const { data: userData } = useGetUserData()
  const { data: config } = useGetDutchAuctionConfig()
  const { data: canInteract } = useLocationValidation()
  const { data: nftContractAddress } = useGetNftContractAddress()
  const [{ data: currentSupply }, { data: maxSupply }] = useTotalSupply()
  const { data: ensName } = useEnsName({ address, enabled: Boolean(address) })

  const isLimitReached = useMemo(() => {
    if (!config?.limitInWei || !userData?.contribution) {
      return false
    }

    return userData.contribution.gt(config.limitInWei)
  }, [config?.limitInWei, userData?.contribution])

  const value: MaschineContextState = useMemo(() => {
    return {
      address,
      isConnected,
      ensName,
      canInteract: canInteract ?? DEFAULT_CONTEXT.canInteract,
      nftContractAddress,
      config,
      isLimitReached,
      currentSupply,
      maxSupply,
      auctionState: getCurrentState(config?.startTime?.toNumber(), config?.endTime?.toNumber(), currentSupply?.toNumber(), maxSupply),
    }
  }, [address, isConnected, ensName, canInteract, nftContractAddress, config, isLimitReached, maxSupply, currentSupply])

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
