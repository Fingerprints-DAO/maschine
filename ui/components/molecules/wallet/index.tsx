import React, { useMemo } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useDisconnect } from 'wagmi'
import { ConnectKitButton } from 'connectkit'
import { useIsBrowser } from '@ui/hooks/use-is-browser'

type WalletProps = {
  variant: 'header' | 'drawer' | 'card'
}

const Wallet = ({ variant }: WalletProps) => {
  const isBrowser = useIsBrowser()
  const { disconnect } = useDisconnect()

  const isDrawer = variant === 'drawer'
  const isCard = variant === 'card'
  const isHeader = variant === 'header'

  const buttonColorScheme = useMemo(() => {
    if (isCard) {
      return
    }

    return isDrawer ? 'gray' : 'whiteAlpha'
  }, [isDrawer, isCard])

  const buttonColor = useMemo(
    () => (isConnected: boolean) => {
      if (isConnected) {
        return 'gray.50'
      }

      return !isHeader ? 'gray.50' : undefined
    },
    [isHeader]
  )

  const handleConnectWallet = (isConnected: boolean, show?: () => void) => () => isConnected ? disconnect() : show?.()

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show }) => {
        return (
          <Flex alignItems={isDrawer ? 'flex-start' : 'center'} flexDirection={isDrawer ? 'column' : 'row'} width={isDrawer ? '100%' : 'auto'}>
            {isBrowser && (
              <Button
                borderColor={isCard ? 'gray.50' : undefined}
                borderWidth={isCard ? 2 : undefined}
                color={buttonColor(isConnected)}
                size="lg"
                fontSize="md"
                h={isHeader ? '44px' : 16}
                mb={isDrawer ? 8 : 0}
                colorScheme={buttonColorScheme}
                variant={isCard || isConnected ? 'outline' : 'solid'}
                w="full"
                onClick={handleConnectWallet(isConnected, show)}
              >
                {!isConnected ? 'Connect' : 'Disconnect'} {!isDrawer && 'wallet'}
              </Button>
            )}
          </Flex>
        )
      }}
    </ConnectKitButton.Custom>
  )
}

export default Wallet
