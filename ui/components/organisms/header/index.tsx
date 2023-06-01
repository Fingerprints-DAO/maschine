import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import logoFP from 'public/images/logo-fp.svg'
import logoFPDark from 'public/images/logo-fp-dark.svg'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import useMediaQuery from '@ui/hooks/use-media-query'
import Footer from '../footer'
import { useIsBrowser } from '@ui/hooks/use-is-browser'
import { useRouter } from 'next/router'
import Wallet from '@ui/components/molecules/wallet'

const nav = [
  { value: '/about', label: 'about' },
  { value: '/faq', label: 'FAQ' },
  // { value: '/terms-and-conditions', label: 'terms' },
]

const Header = () => {
  const router = useRouter()
  const isBrowser = useIsBrowser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
      <Box as="header" py={[8]}>
        <Container as={Flex} alignItems="center" justifyContent="space-between">
          <Box boxSize={[35, 45]}>
            <Link href="/">
              <Image src={logoFP} alt="Fingerprints DAO" />
            </Link>
          </Box>
          {isMobile && isBrowser ? (
            <Box as="button" boxSize={[6, 25]} onClick={onOpen}>
              <HamburgerIcon display="block" boxSize="100%" />
            </Box>
          ) : (
            <Flex as="nav" display="flex" alignItems="center">
              {nav.map((item, index) => {
                const isActive = router.pathname === item.value

                return (
                  <Box
                    key={index}
                    as={Link}
                    href={item.value}
                    title={item.label}
                    mr={14}
                    _hover={{ color: 'secondary.500' }}
                    color={isActive ? 'secondary.500' : 'white'}
                    transition="ease"
                    transitionProperty="color"
                    transitionDuration="0.2s"
                  >
                    <Text as="strong" fontSize={['lg', 'lg', 'lg', 'xl', 'xl', '2xl']}>
                      {item.label}
                    </Text>
                  </Box>
                )
              })}
              <Wallet variant="header" />
            </Flex>
          )}
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="left" size="full" isFullHeight={true} onClose={onClose}>
        <DrawerContent h="full" bgColor="#F5F5F5">
          <DrawerHeader p={8} display="flex" flexDir="row" alignItems="center" justifyContent="space-between">
            <Box boxSize={[35, 45]}>
              <Link href="/">
                <Image src={logoFPDark} alt="Fingerprints DAO" width={54} height={64} />
              </Link>
            </Box>
            <DrawerCloseButton position="static" color="gray.900" />
          </DrawerHeader>
          <DrawerBody mt={8} px={8}>
            {nav.map((item, index) => {
              const isLastChild = nav.length - 1 === index
              const isActive = router.pathname === item.value

              return (
                <Box
                  key={index}
                  as={Link}
                  href={item.value}
                  title={item.label}
                  mb={!isLastChild ? 8 : 0}
                  color={isActive ? 'secondary.500' : 'gray.900'}
                  display="block"
                  onClick={onClose}
                >
                  <Text as="strong" fontSize="1.75rem">
                    {item.label}
                  </Text>
                </Box>
              )
            })}
          </DrawerBody>
          <DrawerFooter p={0}>
            <Box mx="auto">
              <Footer />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
