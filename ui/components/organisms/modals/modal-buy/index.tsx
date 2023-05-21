import React, { useCallback } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'
import Counter from '../../counter'
import useMediaQuery from '@ui/hooks/use-media-query'

const ModalBuy = ({ isOpen, onClose }: ModalProps) => {
  const isMobile = useMediaQuery('(max-width: 479px)')

  const submit = useCallback(async () => {}, [])

  return (
    <Modal isCentered={true} isOpen={isOpen} scrollBehavior="inside" motionPreset={isMobile ? 'slideInBottom' : 'scale'} onClose={onClose}>
      <ModalOverlay height="100vh" />
      <ModalContent
        bg="white"
        position={['fixed', 'unset']}
        bottom={['0px', 'unset']}
        mb={['0', 'auto']}
        borderRadius={['1rem 1rem 0 0', '1rem']}
        maxW={['lg', '438px']}
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
        <Box mb={10}>
          <Text color="gray.500" mb={10}>
            How many NFTs do you want to mint?
          </Text>
          <Counter />
        </Box>
        <ModalFooter px={0} pt={0} display="block">
          <Button variant="solid" size="lg" w="full" mb={6}>
            Mint now
          </Button>
          <Text color="gray.500" fontSize="xs" textAlign="center">
            By clicking {`"Mint now"`} button you agree with our{' '}
            <Box as="a" href="#" color="links.500">
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
