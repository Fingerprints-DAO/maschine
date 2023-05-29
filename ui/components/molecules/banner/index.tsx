import { CloseIcon } from '@chakra-ui/icons'
import { Box, Button, CloseButton, Container, Icon, Link, Square, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { MouseEventHandler, PropsWithChildren } from 'react'
import { BiCookie } from 'react-icons/bi'

export type BannerProps = {
  buttonText?: string
  onClose: MouseEventHandler<HTMLButtonElement>

  reverseBg: boolean
} & PropsWithChildren

export default function Banner({ children, buttonText = 'Close', onClose, reverseBg }: BannerProps) {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <Box as="section" pos={'fixed'} bottom={0} left={0} right={0} zIndex={2}>
      <Box bg={reverseBg ? '#CBD5E0' : '#2D3748'} boxShadow="sm">
        <Container py={{ base: '4', md: '2.5' }} position="relative">
          <CloseButton display={{ md: 'none' }} position="absolute" right="2" top="2" />
          <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" spacing={{ base: '3', md: '2' }}>
            <Stack spacing="4" direction={{ base: 'column', md: 'row' }} align={{ base: 'start', md: 'center' }}>
              {!isMobile && (
                <Square size="12" bg="bg-subtle" borderRadius="md" color={reverseBg ? '#171923' : 'white'}>
                  <Icon as={BiCookie} boxSize="6" />
                </Square>
              )}
              <Stack spacing="0.5" pe={{ base: '4', md: '0' }} color={reverseBg ? '#171923' : 'white'}>
                {children}
              </Stack>
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '3', md: '2' }} align={{ base: 'stretch', md: 'center' }}>
              <Button
                size="lg"
                colorScheme={'whiteAlpha'}
                variant={'outline'}
                color={reverseBg ? '#171923' : 'white'}
                borderColor={reverseBg ? '#171923' : 'white'}
                w="full"
                onClick={onClose}
              >
                <CloseIcon w={'16px'} h={'16px'} display={{ base: 'none', md: 'inline-flex' }} mr={'12px'} />
                <Text mt={'-3px'} fontSize="18px" lineHeight={'24px'}>
                  {buttonText}
                </Text>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
