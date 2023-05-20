import { Box, Container, Flex, Icon } from '@chakra-ui/react'
import Wallet from '@ui/components/molecules/wallet'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SiOpensea } from 'react-icons/si'

type FooterProps = {
  withConnectButton?: boolean
}

const Footer = ({ withConnectButton }: FooterProps) => {
  return (
    <Container as="footer" py={[6, 4]}>
      {withConnectButton && <Wallet variant="drawer" />}
      <Flex alignItems={['unset', 'center']} flexDir={['column', 'row-reverse']}>
        <Flex justifyContent="center" mb={[2, 0]}>
          <Box
            as="a"
            href="https://twitter.com/FingerprintsDAO"
            title="Twitter"
            target="_blank"
            p={2}
            color="gray.500"
            _hover={{ color: 'white' }}
            transition="ease"
            transitionProperty="color"
            transitionDuration="0.2s"
          >
            <Icon as={BsTwitter} w={6} h={6} display="block" />
          </Box>
          <Box
            as="a"
            href="https://discord.gg/aePw7mqz6U"
            title="Discord"
            target="_blank"
            p={2}
            color="gray.500"
            _hover={{ color: 'white' }}
            transition="ease"
            transitionProperty="color"
            transitionDuration="0.2s"
          >
            <Icon as={BsDiscord} w={6} h={6} display="block" />
          </Box>
          <Box
            as="a"
            href="https://opensea.io/0xbc49de68bcbd164574847a7ced47e7475179c76b"
            title="OpenSea"
            target="_blank"
            p={2}
            color="gray.500"
            _hover={{ color: 'white' }}
            transition="ease"
            transitionProperty="color"
            transitionDuration="0.2s"
          >
            <Icon as={SiOpensea} w={6} h={6} display="block" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
