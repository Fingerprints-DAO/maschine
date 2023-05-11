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

const nav = [
  { value: '/', label: 'home' },
  { value: '/about', label: 'about' },
  { value: '/faq', label: 'FAQ' },
]

const Header = () => {
  const router = useRouter()
  const isBrowser = useIsBrowser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useMediaQuery('(max-width: 767px)')

  return (
    <>
      <Box as="header" py={[8, 12]}>
        <Container as={Flex} alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Image src={logoFP} alt="Fingerprints DAO" width={54} height={64} />
          </Link>
          {isMobile && isBrowser ? (
            <Box as="button" p="14px" onClick={onOpen}>
              <HamburgerIcon display="block" />
            </Box>
          ) : (
            <Flex as="nav">
              {nav.map((item, index) => {
                const isLastChild = nav.length - 1 === index
                const isActive = router.pathname === item.value

                return (
                  <Box
                    key={index}
                    as={Link}
                    href={item.value}
                    title={item.label}
                    mr={!isLastChild ? 14 : 0}
                    _hover={{ color: 'secondary.500' }}
                    color={isActive ? 'secondary.500' : 'white'}
                    transition="ease"
                    transitionProperty="color"
                    transitionDuration="0.2s"
                  >
                    <Text as="strong" fontSize="lg">
                      {item.label}
                    </Text>
                  </Box>
                )
              })}
            </Flex>
          )}
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="top" size="full" isFullHeight={true} onClose={onClose}>
        <DrawerContent h="full" bgColor="#F5F5F5">
          <DrawerHeader px={4} py={8} display="flex" flexDir="row" alignItems="center" justifyContent="space-between">
            <Link href="/">
              <Image src={logoFPDark} alt="Fingerprints DAO" width={54} height={64} />
            </Link>
            <DrawerCloseButton position="static" color="gray.900" />
          </DrawerHeader>
          <DrawerBody>
            {nav.map((item, index) => {
              const isLastChild = nav.length - 1 === index
              const isActive = router.pathname === item.value

              return (
                <Box
                  key={index}
                  as={Link}
                  href={item.value}
                  title={item.label}
                  mb={!isLastChild ? 12 : 0}
                  color={isActive ? 'secondary.500' : 'gray.900'}
                  display="block"
                  onClick={onClose}
                >
                  <Text as="strong" fontSize="2rem">
                    {item.label}
                  </Text>
                </Box>
              )
            })}
          </DrawerBody>
          <DrawerFooter p={0}>
            <Footer />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
