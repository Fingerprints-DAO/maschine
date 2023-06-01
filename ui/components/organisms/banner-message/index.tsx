import { As, CloseButton, Flex, Icon } from '@chakra-ui/react'
import { PropsWithChildren, forwardRef } from 'react'

type UnavailabilityProps = {
  bg: string
  position?: 'relative' | 'fixed'
  icon: As
  onClose: () => void
}

const BannerMessage = forwardRef<HTMLDivElement, PropsWithChildren<UnavailabilityProps>>(({ bg, icon, position, children, onClose }, ref) => {
  return (
    <Flex
      ref={ref}
      alignItems="center"
      justifyContent="center"
      bg={bg}
      p={['84px 16px 72px', 4]}
      position={position || 'relative'}
      w="full"
      zIndex="toast"
      top={0}
    >
      <Icon as={icon} color="gray.900" />
      {children}
      <CloseButton color="gray.900" position="absolute" right="7px" top="7px" w="44px" h="44px" size="lg" onClick={onClose} />
    </Flex>
  )
})

BannerMessage.displayName = 'BannerMessage'

export default BannerMessage
