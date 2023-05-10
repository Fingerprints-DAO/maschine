import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SiOpensea } from 'react-icons/si'

const Footer = () => {
  return (
    <Container as="footer" py={[6, 4]}>
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
            <Icon as={BsTwitter} w={8} h={8} display="block" />
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
            <Icon as={BsDiscord} w={8} h={8} display="block" />
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
            <Icon as={SiOpensea} w={8} h={8} display="block" />
          </Box>
        </Flex>
        <Text align={['center', 'left']} fontSize="xs" color="gray.500" flex={1}>
          By{' '}
          <Box as="a" href="https://fingerprintsdao.xyz" title="Fingerprints DAO" target="_blank">
            Fingerprints DAO
          </Box>{' '}
          & developed by{' '}
          <Box as="a" title="arod.studio" href="https://arod.studio" target="_blank">
            arod.studio
          </Box>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
