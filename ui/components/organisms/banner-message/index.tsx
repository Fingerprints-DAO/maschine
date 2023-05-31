import { As, Box, CloseButton, Flex, Icon } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

type UnavailabilityProps = {
  bg: string
  icon: As
  onClose: () => void
}

const BannerMessage = ({ bg, icon, children, onClose }: PropsWithChildren<UnavailabilityProps>) => {
  return (
    <Flex alignItems="center" justifyContent="center" bg={bg} p={['84px 16px 72px', 4]} position="relative">
      <Icon as={icon} color="gray.900" />
      {children}
      <CloseButton color="gray.900" position="absolute" right="7px" top="7px" w="44px" h="44px" size="lg" onClick={onClose} />
    </Flex>
  )
}

export default BannerMessage
