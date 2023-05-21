import { Box, CloseButton, Container, Flex, Text } from '@chakra-ui/react'
import useMediaQuery from '@ui/hooks/use-media-query'
import { HiOutlineLockClosed } from 'react-icons/hi'

const Unavailability = () => {
  const isMobile = useMediaQuery('(max-width: 479px)')

  return (
    <Box bg="#F76B8B" position="relative">
      <Container color="gray.700" maxW={['full', 'full', 'unset']} p={isMobile ? '16px 16px 72px' : 6}>
        <CloseButton
          w="44px"
          h="44px"
          size="lg"
          ml={isMobile ? 'auto' : undefined}
          mb={isMobile ? 6 : undefined}
          position={isMobile ? 'static' : 'absolute'}
          right={4}
          top={4}
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
            <Box as="a" href="#" target="_blank" textDecoration="underline">
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
