import React, { useCallback } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'

const ModalBuy = ({ isOpen, onClose }: ModalProps) => {
  const submit = useCallback(async () => {}, [])

  return (
    <Modal isCentered onClose={onClose} isOpen={isOpen} scrollBehavior="outside" motionPreset="slideInBottom">
      <ModalOverlay height="100vh" />
      <ModalContent
        bg="white"
        //   background="gray.900" padding={[6, 12]} minW={['unset', 650]} maxW={['90%', '90%', '90%', 'md']}
        position="fixed"
        bottom="0px"
        mb="0"
        borderRadius="1.75rem 1.75rem 0px 0px"
        maxW="lg"
        px={4}
        py={6}
      >
        <ModalHeader position="relative" py="13px" mb={10}>
          <Text fontSize="lg" lineHeight={1} color="gray.900" textAlign="center">
            Buy NFTs now
          </Text>
          <CloseButton color="gray.500" onClick={onClose} position="absolute" right={0} top={0} w="44px" h="44px" size="lg" />
        </ModalHeader>
        <Box borderColor="gray.100" borderWidth={1} borderRadius="8px" p={4} mb={10}>
          <Text color="gray.500" mb={1}>
            Current price is
          </Text>
          <Text color="gray.700" fontWeight="bold">
            0.59 ETH
          </Text>
        </Box>
        <Box>
          <Text color="gray.500">How many NFTs do you want to mint?</Text>
        </Box>
        <ModalFooter px={0} display="block">
          <Text color="gray.500" fontSize="xs" textAlign="center">
            By clicking {`"Mint now"`} button you agree with our{' '}
            <Box as="a" color="links.500">
              terms of use
            </Box>
            .
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalBuy
