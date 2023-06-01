import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import { HiOutlineLockClosed } from 'react-icons/hi'

const RebateCta = () => {
  const { handleOpenModal } = useModalContext()
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
          Auction rebate is now available
        </Text>
        <Text color="gray.500" mb={isMobile ? 8 : undefined}>
          Claim your rebate and get cashback according with last auction sell.
        </Text>
      </Box>
      <Button
        variant="white"
        w={isMobile ? 'full' : undefined}
        size="lg"
        ml={isMobile ? undefined : 8}
        onClick={handleOpenModal(ModalElement.Rebate)}
      >
        Claim rebate
      </Button>
      <Button
        color="gray.500"
        cursor="no-drop"
        borderColor="gray.500"
        leftIcon={<HiOutlineLockClosed />}
        variant="outline"
        disabled={true}
        h={16}
        w={isMobile ? 'full' : undefined}
        size="lg"
        ml={isMobile ? undefined : 8}
      >
        Claimed
      </Button>
    </Box>
  )
}

export default RebateCta
