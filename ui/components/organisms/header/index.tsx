import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import logoFP from 'public/images/logo-fp.svg'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import Container from '@ui/components/molecules/container'

const Header = () => {
  return (
    <Box as="header" py={[8, 12]}>
      <Container as={Flex} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Image src={logoFP} alt="Fingerprints DAO" width={54} height={64} />
        </Link>
        <Box as="button" p="14px">
          <HamburgerIcon display="block" />
        </Box>
      </Container>
    </Box>
  )
}

export default Header
