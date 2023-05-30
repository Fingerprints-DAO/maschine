import { mainnet, hardhat } from '@wagmi/chains'
import { baseGoerli } from '@ui/contexts/web3/base-goerli-chain'
import { goerli } from 'wagmi'

// return chain id based on NEXT_PUBLIC_WEB3_NETWORK
export const getChainId = () => {
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'baseGoerli') return baseGoerli.id
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'goerli') return goerli.id
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'local') return hardhat.id
  return mainnet.id
}

// return chain based on NEXT_PUBLIC_WEB3_NETWORK
export const getChain = () => {
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'baseGoerli') return baseGoerli
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'goerli') return goerli
  if (process.env.NEXT_PUBLIC_WEB3_NETWORK === 'local') return hardhat

  return mainnet
}
