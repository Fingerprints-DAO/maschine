import { Box, Button, Flex, Text, Tooltip, theme } from '@chakra-ui/react'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import Link from 'next/link'
import { useMemo } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'

const MintCta = ({ claimableCount }: { claimableCount: number }) => {
  const isMobile = useMediaQuery('(max-width: 479px)')
  const { handleOpenModal } = useModalContext()
  const isElegible = useMemo(() => claimableCount > 0, [claimableCount])

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
          Mint more NFTs with your pending rebate
        </Text>
        <Text color="gray.500" mb={isMobile ? 8 : undefined}>
          You don&apos;t have to commit any more ETH to do this. Check out our <Link href="/faq">FAQ</Link>.
        </Text>
      </Box>
      {isElegible && (
        <Button
          variant="white"
          w={isMobile ? 'full' : undefined}
          size="lg"
          ml={isMobile ? undefined : 8}
          onClick={handleOpenModal(ModalElement.Mint)}
        >
          Mint new NFT
        </Button>
      )}
      {!isElegible && (
        <Tooltip
          label={"You haven't purchased an NFT or the price drop is too low."}
          fontSize="sm"
          bg="whiteAlpha.900"
          color={'gray.900'}
          textAlign="center"
          placement="auto"
          hasArrow={true}
          arrowSize={8}
          borderRadius="8px"
        >
          <Button
            isDisabled
            w={isMobile ? 'full' : undefined}
            size="lg"
            ml={isMobile ? undefined : 8}
            onClick={handleOpenModal(ModalElement.Mint)}
            _hover={{ '&:disabled': { background: theme.colors.whiteAlpha } }}
            color="gray.500"
            cursor="no-drop"
            borderColor="gray.500"
            leftIcon={<HiOutlineLockClosed />}
            variant="outline"
          >
            Not elegible
          </Button>
        </Tooltip>
      )}
    </Box>
  )
}

export default MintCta
