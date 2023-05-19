import React, { useMemo } from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useDisconnect } from 'wagmi'
import { Avatar, ConnectKitButton } from 'connectkit'
import { shortenAddress } from '@ui/utils/string'
import { useMaschineContext } from '@ui/contexts/maschine'
import useMediaQuery from '@ui/hooks/use-media-query'

type WalletProps = {
  variant: 'header' | 'drawer' | 'card'
}

const Wallet = ({ variant }: WalletProps) => {
  const { disconnect } = useDisconnect()
  const { address } = useMaschineContext()
  const isMobile = useMediaQuery('(max-width: 479px)')

  const isDrawer = variant === 'drawer'
  const isCard = variant === 'card'
  const isHeader = variant === 'header'

  const buttonVariant = useMemo(
    () => (isConnected: boolean) => {
      if (isCard) {
        return 'outline'
      }

      return isConnected ? 'outline' : 'solid'
    },
    [isCard]
  )

  const buttonColorScheme = useMemo(() => {
    if (isCard) {
      return
    }

    return isDrawer ? 'gray' : 'whiteAlpha'
  }, [isDrawer, isCard])

  const handleConnectWallet = (isConnected: boolean, show?: () => void) => () => isConnected ? disconnect() : show?.()

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, ensName }) => {
        return (
          <Flex alignItems={isDrawer ? 'flex-start' : 'center'} flexDirection={isDrawer ? 'column' : 'row'} width={isDrawer ? '100%' : 'auto'}>
            {isConnected && !isCard && (
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
              borderColor={isCard ? 'gray.50' : undefined}
              borderWidth={isCard ? 2 : undefined}
              color={!isHeader ? 'gray.50' : undefined}
              h={[16, isCard ? 16 : '44px']}
              fontSize={['lg']}
              mb={isDrawer ? 8 : 0}
              colorScheme={buttonColorScheme}
              _hover={{ backgroundColor: isDrawer ? 'gray' : 'whiteAlpha.500' }}
              variant={buttonVariant(isConnected)}
              w={['full']}
              onClick={handleConnectWallet(isConnected, show)}
            >
              {!isConnected ? 'Connect' : 'Disconnect'} {isCard && 'wallet'}
            </Button>
          </Flex>
        )
      }}
    </ConnectKitButton.Custom>
  )
}

export default Wallet
