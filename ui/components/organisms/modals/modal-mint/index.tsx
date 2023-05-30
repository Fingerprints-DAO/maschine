import React, { useCallback } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import Counter from '../../counter'

const ModalMint = ({ isOpen, onClose }: ModalProps) => {
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
        maxH="full"
        px={4}
        py={6}
      >
        <ModalHeader position="relative" py="13px">
          <Text fontSize="lg" lineHeight={1} color="gray.900" textAlign="center">
            Mint NFT with rebate
          </Text>
          <CloseButton color="gray.500" onClick={onClose} position="absolute" right={0} top={0} w="44px" h="44px" size="lg" />
        </ModalHeader>
        <Box overflowY="auto" my={10}>
          <Box mb={10}>
            <Text color="gray.500" mb={2}>
              Rebate balance:
            </Text>
            <Box borderColor="gray.100" borderWidth={1} borderRadius="8px" p={4}>
              <Box mb={8}>
                <Text color="gray.500" mb={1}>
                  You bought
                </Text>
                <Text color="gray.700" fontWeight="bold">
                  1 NFTs{' '}
                  <Text as="span" color="gray.500" fontWeight="normal">
                    per
                  </Text>{' '}
                  1.2 ETH
                </Text>
              </Box>
              <Box mb={8}>
                <Text color="gray.500" mb={1}>
                  Current price is
                </Text>
                <Text color="gray.700" fontWeight="bold">
                  0.59 ETH
                </Text>
              </Box>
              <Box>
                <Text color="gray.500" mb={1}>
                  Pending rebate
                </Text>
                <Text fontSize="2xl" color="gray.700" fontWeight="bold">
                  0.61 ETH
                </Text>
              </Box>
            </Box>
          </Box>
          <Text color="gray.500" mb={2}>
            Extra NFTs
          </Text>
          {/* <Counter /> */}
        </Box>
        <Box>
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
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default ModalMint
