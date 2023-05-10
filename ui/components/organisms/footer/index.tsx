import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import Container from '@ui/components/molecules/container'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { SiOpensea } from 'react-icons/si'

const Footer = () => {
  return (
    <Container as="footer" py={6}>
      <Flex flexDir="column">
        <Flex justifyContent="center" mb={[2, 10]}>
          <Box as="a" href="#" title="Twitter" target="_blank" p={2}>
            <Icon as={BsTwitter} w={8} h={8} color="gray.500" />
          </Box>
          <Box as="a" href="#" title="Discord" target="_blank" p={2}>
            <Icon as={BsDiscord} w={8} h={8} color="gray.500" />
          </Box>
          <Box as="a" href="#" title="OpenSea" target="_blank" p={2}>
            <Icon as={SiOpensea} w={8} h={8} color="gray.500" />
          </Box>
        </Flex>
        <Text align="center" fontSize="xs" color="gray.500">
          By Fingerprints DAO & developed by{' '}
          <Box as="a" href="https://arod.studio" target="_blank">
            arod.studio
          </Box>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
