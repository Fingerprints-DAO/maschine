import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import useGetDutchAuctionConfig from '@web3/contracts/dutch-auction/use-get-dutch-auction-config'
import useGetNftContractAddress from '@web3/contracts/dutch-auction/use-get-nft-contract-address'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import useTotalSupply from '@web3/contracts/maschine/use-total-supply'
import useLocationValidation from '@web3/maschine/use-location-validation'
import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { formatEther, parseEther } from 'ethers/lib/utils.js'
// import { BigNumber } from 'ethers'
import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { useQueryClient } from 'react-query'
import { formatToEtherStringBN, normalizeBigNumber } from 'utils/price'
import { Address, useAccount } from 'wagmi'

export enum AUCTION_STATE {
  NOT_STARTED,
  STARTED,
  SOLD_OUT,
  ENDED,
  REBATE_STARTED,
  REBATE_DELAY,
}

type MaschineContextState = {
  isConnected: boolean
  canInteract: boolean
  isLimitReached: boolean | null
  auctionState: AUCTION_STATE
  address?: Address
  nftContractAddress?: Address
  config?: Partial<{
    startAmountInWei: BigNumber
    startAmount: String
    endAmountInWei: BigNumber
    endAmount: String
    limitInWei: BigNumber
    limit: String
    refundDelayTime: number
    startTime: BigNumber
    endTime: BigNumber
  }>
  currentSupply?: BigNumber
  maxSupply?: number
}

const DEFAULT_CONTEXT = {
  isConnected: false,
  isLimitReached: null,
  canInteract: true,
  auctionState: AUCTION_STATE.NOT_STARTED,
} as MaschineContextState

const MaschineContext = createContext(DEFAULT_CONTEXT)

const getCurrentState = (startTime?: number, endTime?: number, currentSupply = 0, maxSupply = 0, refundDelayTime = 0) => {
  if (!startTime || !endTime) return AUCTION_STATE.NOT_STARTED
  if (currentSupply >= maxSupply) return AUCTION_STATE.REBATE_STARTED

  const now = dayjs()
  const refundStartTime = dayjs.unix(endTime + refundDelayTime)

  if (now.isAfter(refundStartTime)) return AUCTION_STATE.REBATE_STARTED

  const start = dayjs.unix(startTime)
  const end = dayjs.unix(endTime)

  if (now.isAfter(end)) return AUCTION_STATE.ENDED
  if (now.isAfter(start)) return AUCTION_STATE.STARTED

  return AUCTION_STATE.NOT_STARTED
}

const MaschineProvider = ({ children }: PropsWithChildren) => {
  const { address, isConnected } = useAccount()
  const { data: userData } = useGetUserData(address)
  const { data: config } = useGetDutchAuctionConfig()
  const { data: canInteract } = useLocationValidation()
  const { data: nftContractAddress } = useGetNftContractAddress()
  const [{ data: currentSupply }, { data: maxSupply }] = useTotalSupply()
  const { priceEther } = useGetCurrentPrice()
  const queryClient = useQueryClient()
  const [isLimitReached, setIslimitReache] = useState<boolean | null>(null)
  const [walletAddress, setWalletAddress] = useState(address)

  const value: MaschineContextState = useMemo(() => {
    return {
      address,
      isConnected,
      canInteract: canInteract ?? DEFAULT_CONTEXT.canInteract,
      nftContractAddress,
      config: {
        ...config,
        startAmountInWei: normalizeBigNumber(config?.startAmountInWei),
        startAmount: formatToEtherStringBN(config?.startAmountInWei),
        endAmountInWei: normalizeBigNumber(config?.endAmountInWei),
        endAmount: formatToEtherStringBN(config?.endAmountInWei),
        limitInWei: normalizeBigNumber(config?.limitInWei),
        limit: formatToEtherStringBN(config?.limitInWei),
        startTime: normalizeBigNumber(config?.startTime),
        endTime: normalizeBigNumber(config?.endTime),
      },
      isLimitReached,
      currentSupply: normalizeBigNumber(currentSupply),
      maxSupply,
      auctionState: getCurrentState(
        config?.startTime?.toNumber(),
        config?.endTime?.toNumber(),
        currentSupply?.toNumber(),
        maxSupply,
        config?.refundDelayTime
      ),
    }
  }, [address, isConnected, canInteract, nftContractAddress, config, isLimitReached, maxSupply, currentSupply])

  useEffect(() => {
    // console.log('fetch limit', userData)
    if (!config?.limitInWei || !userData?.contribution) {
      return setIslimitReache(isLimitReached || null)
    }
    // console.log('calculating limit')
    const contribution = normalizeBigNumber(userData.contribution)

    setIslimitReache(contribution.plus(priceEther).gt(normalizeBigNumber(config.limitInWei)))
  }, [config?.limitInWei, isLimitReached, priceEther, userData, userData?.contribution])

  useEffect(() => {
    if (address !== walletAddress) {
      setWalletAddress(address)
      queryClient.refetchQueries('user-data')
    }
  }, [address, queryClient, walletAddress])

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
