import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { Address, useAccount, useEnsName } from 'wagmi'

type MaschineContextState = {
  isConnected: boolean
  address?: Address
  ensName?: string | null
}

const DEFAULT_CONTEXT = {
  isAdmin: false,
  isAdminOrEditor: false,
  isEditor: false,
  isConnected: false,
} as MaschineContextState

const MaschineContext = createContext(DEFAULT_CONTEXT)

const MaschineProvider = ({ children }: PropsWithChildren) => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address, enabled: Boolean(address) })

  const value: MaschineContextState = useMemo(
    () => ({
      address,
      isConnected,
      ensName,
    }),
    [address, isConnected, ensName]
  )

  return <MaschineContext.Provider value={value}>{children}</MaschineContext.Provider>
}

const useMaschineContext = () => {
  return useContext(MaschineContext)
}

export { MaschineContext, MaschineProvider, useMaschineContext }
