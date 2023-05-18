import { Chain } from 'wagmi'

export const baseGoerli: Chain = {
  id: 84531,
  name: 'Base Goerli',
  network: 'base-goerli',
  nativeCurrency: {
    name: 'Base Goerli',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    public: { http: ['https://goerli.base.org'] },
    default: { http: ['https://goerli.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'Basescan', url: 'https://goerli.basescan.org' },
    default: { name: 'Basescan', url: 'https://goerli.basescan.org' },
  },
  testnet: true,
}
