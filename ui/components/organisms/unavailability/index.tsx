import Link from 'next/link'
import { Box, CloseButton, Container, Flex, Text } from '@chakra-ui/react'
import { HiOutlineLockClosed } from 'react-icons/hi'

type UnavailabilityProps = {
  onClose: () => void
}

const Unavailability = ({ onClose }: UnavailabilityProps) => {
  return (
    <Box bg="#F76B8B" position="relative">
      <Container color="gray.700" maxW={['full', 'full', 'unset']} p={['16px 16px 72px', 6]}>
        <CloseButton
          w="44px"
          h="44px"
          size="lg"
          ml={['auto', 'unset']}
          mb={[6, 'unset']}
          position={['static', 'absolute']}
          right={4}
          top={4}
          onClick={onClose}
        />
        <Flex justifyContent="center" alignItems="baseline" flexWrap="wrap">
          <HiOutlineLockClosed />
          <Text
            fontSize="lg"
            fontWeight="bold"
            ml={2}
            flexGrow={[0, 0, 0, 'unset']}
            flexShrink={[1, 1, 1, 'unset']}
            flexBasis={['90%', '90%', '90%', 'unset']}
          >
            It seems like you are not eligible to mint an Maschine NFT. Please{' '}
            <Box as={Link} href="terms-and-conditions" textDecoration="underline">
              read our terms
            </Box>{' '}
            for more information.
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Unavailability
