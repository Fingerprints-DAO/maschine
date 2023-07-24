import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SiOpensea } from 'react-icons/si'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" py={[6, 4]} mt={[25]}>
      <Flex flexDir={'column'} mx="auto" mb={4}>
        <Flex alignItems={['center', 'center', 'end']} flexDir={['column', 'row']} justifyContent={['space-between']}>
          <Box>
            <Box
              as={Link}
              href="/terms-and-conditions"
              fontSize={['xs', 'md']}
              color="whiteAlpha.800"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'white' }}
              transition="ease"
              transitionProperty="color"
              transitionDuration="0.2s"
            >
              <Text as="b">Terms and Conditions</Text>
            </Box>
            <Box
              as={Link}
              href="mailto:contact@fingerprintsdao.xyz"
              fontSize={['xs', 'md']}
              color="whiteAlpha.800"
              style={{ textDecoration: 'none' }}
              _hover={{ color: 'white' }}
              transition="ease"
              transitionProperty="color"
              transitionDuration="0.2s"
              ml={[4, 6]}
            >
              <Text as="b">Contact Us</Text>
            </Box>
          </Box>

          <Flex>
            <Box
              as="a"
              href="https://twitter.com/FingerprintsDAO"
              title="Twitter"
              target="_blank"
              p={2}
              color="whiteAlpha.900"
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
              color="whiteAlpha.900"
              _hover={{ color: 'white' }}
              transition="ease"
              transitionProperty="color"
              transitionDuration="0.2s"
            >
              <Icon as={BsDiscord} w={6} h={6} display="block" />
            </Box>
            <Box
              as="a"
              href="https://opensea.io/collection/maschine"
              title="OpenSea"
              target="_blank"
              p={2}
              color="whiteAlpha.900"
              _hover={{ color: 'white' }}
              transition="ease"
              transitionProperty="color"
              transitionDuration="0.2s"
            >
              <Icon as={SiOpensea} w={6} h={6} display="block" />
            </Box>
          </Flex>
        </Flex>

        <Text align={['center', 'center', 'left']} fontSize="xs" color="whiteAlpha.600" flex={1} mb={[2, 0]} mt={2}>
          Developed by{' '}
          <Text
            as="a"
            href="https://fingerprintsdao.xyz"
            title="Fingerprints DAO"
            target="_blank"
            style={{ textDecoration: 'none' }}
            transition="opacity 0.2s"
            _hover={{ opacity: 0.5 }}
          >
            Fingerprints DAO
          </Text>{' '}
          &{' '}
          <Text
            as="a"
            title="arod.studio"
            href="https://arod.studio"
            target="_blank"
            style={{ textDecoration: 'none' }}
            transition="opacity 0.2s"
            _hover={{ opacity: 0.5 }}
          >
            arod.studio
          </Text>
          <Text>Fingerprints Foundation, Cricket Square, Hutchins Drive, P.O. Box 2681, Grand Cayman</Text>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
