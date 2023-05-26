import { Box, Container, Text } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Terms and conditions</title>
      </Head>
      <Box as="main">
        <Header />
        <Box as="section" pt={14} pb="132px">
          <Container>
            <Text as="h1" fontSize="5xl" fontWeight="bold" mb={['72px']} lineHeight={['55px']}>
              Terms & conditions
            </Text>
            <Box mb={8}>
              <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                1.1 Rules
              </Text>
              <Text color="gray.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi elementum, pretium odio sit amet, mollis augue. Fusce eget mattis
                elit. Ut elementum rhoncus justo. Quisque venenatis magna vitae elit placerat faucibus. Pellentesque sagittis pulvinar ante, ut
                volutpat nisi suscipit dignissim. Mauris mollis scelerisque libero non aliquam. Pellentesque feugiat vel tellus non suscipit. Etiam
                consequat magna quis dui pretium luctus eget eu velit. Suspendisse sed euismod nisi, quis pharetra felis. Phasellus sed enim eget leo
                sagittis gravida. Sed eget magna quis metus finibus tristique. Morbi ex diam, dictum nec augue et, molestie pulvinar orci. Donec sit
                amet justo ut ex mollis tempus. Quisque ultricies velit at massa malesuada scelerisque a ut odio. Duis id euismod ipsum. Donec auctor
                ligula sit amet viverra ultricies. Sed non mi vitae lectus tristique ultrices. Ut sollicitudin quis ex ac congue. Quisque lectus urna,
                condimentum et lorem nec, posuere facilisis erat. Vivamus pulvinar diam aliquam vehicula lacinia. Nunc congue felis vitae fringilla
                suscipit. Sed blandit enim lectus, tempor cursus turpis scelerisque in. Ut suscipit feugiat finibus. Maecenas vitae semper augue,
                vehicula porttitor velit. Nulla facilisi.
              </Text>
            </Box>
            <Box>
              <Text as="strong" fontSize="2xl" display="block" mb={4} color="gray.100">
                1.2 Rules
              </Text>
              <Text color="gray.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi elementum, pretium odio sit amet, mollis augue. Fusce eget mattis
                elit. Ut elementum rhoncus justo. Quisque venenatis magna vitae elit placerat faucibus. Pellentesque sagittis pulvinar ante, ut
                volutpat nisi suscipit dignissim. Mauris mollis scelerisque libero non aliquam. Pellentesque feugiat vel tellus non suscipit. Etiam
                consequat magna quis dui pretium luctus eget eu velit. Suspendisse sed euismod nisi, quis pharetra felis. Phasellus sed enim eget leo
                sagittis gravida. Sed eget magna quis metus finibus tristique. Morbi ex diam, dictum nec augue et, molestie pulvinar orci. Donec sit
                amet justo ut ex mollis tempus. Quisque ultricies velit at massa malesuada scelerisque a ut odio. Duis id euismod ipsum. Donec auctor
                ligula sit amet viverra ultricies. Sed non mi vitae lectus tristique ultrices. Ut sollicitudin quis ex ac congue. Quisque lectus urna,
                condimentum et lorem nec, posuere facilisis erat. Vivamus pulvinar diam aliquam vehicula lacinia. Nunc congue felis vitae fringilla
                suscipit. Sed blandit enim lectus, tempor cursus turpis scelerisque in. Ut suscipit feugiat finibus. Maecenas vitae semper augue,
                vehicula porttitor velit. Nulla facilisi.
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default TermsAndConditionsPage
