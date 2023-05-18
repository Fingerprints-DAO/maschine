import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useDisconnect } from 'wagmi'
import { Avatar, ConnectKitButton } from 'connectkit'
import { shortenAddress } from '@ui/utils/string'
import { useMaschineContext } from '@ui/contexts/maschine'
import useMediaQuery from '@ui/hooks/use-media-query'

type WalletProps = {
  variant: 'header' | 'drawer'
}

const Wallet = ({ variant }: WalletProps) => {
  const { disconnect } = useDisconnect()
  const { address } = useMaschineContext()
  const isMobile = useMediaQuery('(max-width: 479px)')

  const isDrawer = variant === 'drawer'

  const handleConnectWallet = (isConnected: boolean, show?: () => void) => () => isConnected ? disconnect() : show?.()

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, ensName }) => {
        return (
          <Flex alignItems={isDrawer ? 'flex-start' : 'center'} flexDirection={isDrawer ? 'column' : 'row'} width={isDrawer ? '100%' : 'auto'}>
            {isConnected && (
              <Flex flexDirection={isDrawer ? 'row-reverse' : 'row'} alignItems="center" mr={isDrawer ? 0 : [3, 6]} mb={isDrawer ? 6 : 0}>
                <Box textAlign={isDrawer ? 'left' : 'right'} mx={2}>
                  {/* <Text as="strong" color="gray.200" display="block" fontSize={['xs', 'sm']} fontWeight={600} mb="-2px">
                    {nftsBalance?.toString() ?? '0'} FP NFTs
                  </Text> */}
                  <Text as="span" color="gray.400" fontSize={['xs', 'sm']} display="block">
                    {ensName || shortenAddress(address, 5)}
                  </Text>
                </Box>
                <Avatar size={isMobile ? 30 : 40} name={ensName} address={address} />
              </Flex>
            )}
            <Button
              //   color={isConnected ? 'gray.200' : 'gray.900'}
              //   size={['xs', 'md']}
              size={['lg', 'md']}
              h={[16, '44px']}
              mb={isDrawer ? 8 : 0}
              borderColor="gray.200"
              color={isDrawer ? 'white' : 'gray.900'}
              variant={isConnected ? 'outline' : 'solid'}
              w={['full']}
              bg={isDrawer ? 'gray.900' : 'white'}
              onClick={handleConnectWallet(isConnected, show)}
            >
              {!isConnected ? 'Connect' : 'Disconnect'}
            </Button>
          </Flex>
        )
      }}
    </ConnectKitButton.Custom>
  )
}

export default Wallet
