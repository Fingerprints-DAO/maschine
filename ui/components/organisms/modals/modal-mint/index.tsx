import React, { useCallback } from 'react'
import { Box, Heading, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'

const ModalMint = ({ isOpen, onClose }: ModalProps) => {
  const submit = useCallback(async () => {}, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent background="gray.900" padding={[6, 12]} minW={['unset', 650]} maxW={['90%', '90%', '90%', 'md']}></ModalContent>
    </Modal>
  )
}

export default ModalMint
