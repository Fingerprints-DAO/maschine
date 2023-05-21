import { Box, Button, Flex, Text } from '@chakra-ui/react'
import useMediaQuery from '@ui/hooks/use-media-query'

const MintCta = () => {
  const isMobile = useMediaQuery('(max-width: 479px)')

  return (
    <Box
      as={isMobile ? 'div' : Flex}
      alignItems={!isMobile ? 'center' : undefined}
      borderWidth={2}
      borderColor="gray.100"
      p={6}
      mb={isMobile ? 10 : undefined}
      borderRadius="8px"
    >
      <Box flex={1}>
        <Text color="gray.300" fontSize="2xl" fontWeight="bold" lineHeight="27.6px" mb={2}>
          Prices have dropped and you can now mint more NFTs with your pending rebate
        </Text>
        <Text color="gray.500" mb={isMobile ? 8 : undefined}>
          You don&apos;t have to commit any more ETH to do this.
        </Text>
      </Box>
      <Button variant="white" w={isMobile ? 'full' : undefined} size="lg" ml={isMobile ? undefined : 8}>
        Mint new NFT
      </Button>
    </Box>
  )
}

export default MintCta
