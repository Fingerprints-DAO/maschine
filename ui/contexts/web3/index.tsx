import React, { PropsWithChildren } from 'react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { getChain } from '@web3/helpers/chain'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
import { baseGoerli } from './base-goerli-chain'

const selectedChain = [getChain()]

const { chains } = configureChains(selectedChain, [
  infuraProvider({ apiKey: process.env.NEXT_PUBLIC_PROVIDER_KEY || '' }),
  // alchemyProvider({
  //   apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '',
  // }),
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.id === baseGoerli.id) return null
      return {
        http: chain.rpcUrls.default.http[0],
      }
    },
  }),
])

const config = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'Staking for Perks by Fingerprints DAO',
    infuraId: process.env.NEXT_PUBLIC_PROVIDER_KEY,
    // alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    chains,
  })
)

export const Web3Provider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig client={config}>
      <ConnectKitProvider theme="auto" mode="light">
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default Web3Provider
