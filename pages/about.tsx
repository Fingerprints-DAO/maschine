import { AspectRatio, Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'
import Image from 'next/image'
import carbonFiber from 'public/images/carbon-fiber.png'
import aHarmVanDenDorpel from 'public/images/a-harm-van-den-dorpel.png'
import fingerPrintsThumb from 'public/images/fingerprints-thumb.png'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Box as="main">
        <Header />
        <Box as="section" pt={10} pb={148}>
          <Container>
            <Text as="h1" color="gray.300" fontSize="lg" fontWeight="bold" mb={6}>
              About Maschine project
            </Text>
            <Box mb={[16, '72px']} display={['block', 'flex']} flexDir="row">
              <AspectRatio
                maxW="full"
                w={['auto', '316px']}
                h={['auto', '288px']}
                ratio={4 / 3}
                borderRadius={8}
                overflow="hidden"
                mb={[8, 0]}
                mr={[0, 8]}
              >
                <Image src={carbonFiber} alt="The Maschine Collection" />
              </AspectRatio>
              <Box flex={1}>
                <Text as="h3" color="gray.50" fontWeight="bold" fontSize="5xl" lineHeight="55px" mb={4}>
                  The Maschine Collection
                </Text>
                <Text fontWeight="light" color="gray.300" fontSize="lg" lineHeight="6">
                  Harm van den Dorpel is an artist dedicated to discovering emergent aesthetics by composing software and language, borrowing from
                  disparate fields such as genetics and blockchain. Also I co-founded left gallery. Based in Berlin. Harm van den Dorpel is an artist
                  dedicated to discovering emergent aesthetics by composing software and language, borrowing from disparate fields such as genetics
                  and blockchain. Also I co-founded left gallery. Based in Berlin.Harm van den Dorpel is an artist dedicated to discovering emergent
                  aesthetics by composing software and language, borrowing from disparate fields such as genetics and blockchain. Also I co-founded
                  left gallery. Based in Berlin.
                </Text>
              </Box>
            </Box>
            <Box mb={[16, '72px']} display={['block', 'flex']} flexDir="row">
              <AspectRatio
                maxW="full"
                w={['auto', '316px']}
                h={['auto', '288px']}
                ratio={4 / 3}
                borderRadius={8}
                overflow="hidden"
                mb={[8, 0]}
                mr={[0, 8]}
              >
                <Image src={aHarmVanDenDorpel} alt="A Harm van den Dorpel artwork" />
              </AspectRatio>
              <Box flex={1}>
                <Text as="h3" color="gray.50" fontWeight="bold" fontSize="5xl" lineHeight="55px" mb={4}>
                  A Harm van den Dorpel artwork
                </Text>
                <Text fontWeight="light" color="gray.300" fontSize="lg" lineHeight="6">
                  Harm van den Dorpel is an artist dedicated to discovering emergent aesthetics by composing software and language, borrowing from
                  disparate fields such as genetics and blockchain. Also I co-founded left gallery. Based in Berlin. Harm van den Dorpel is an artist
                  dedicated to discovering emergent aesthetics by composing software and language, borrowing from disparate fields such as genetics
                  and blockchain. Also I co-founded left gallery. Based in Berlin.Harm van den Dorpel is an artist dedicated to discovering emergent
                  aesthetics by composing software and language, borrowing from disparate fields such as genetics and blockchain. Also I co-founded
                  left gallery. Based in Berlin.
                </Text>
              </Box>
            </Box>
            <Box display={['block', 'flex']} flexDir="row">
              <AspectRatio
                maxW="full"
                w={['auto', '316px']}
                h={['auto', '288px']}
                ratio={4 / 3}
                borderRadius={8}
                overflow="hidden"
                mb={[8, 0]}
                mr={[0, 8]}
              >
                <Image src={fingerPrintsThumb} alt="By Fingerprints community" />
              </AspectRatio>
              <Box flex={1}>
                <Text as="h3" color="gray.50" fontWeight="bold" fontSize="5xl" lineHeight="55px" mb={4}>
                  By Fingerprints community
                </Text>
                <Text fontWeight="light" color="gray.300" fontSize="lg" lineHeight="6">
                  Harm van den Dorpel is an artist dedicated to discovering emergent aesthetics by composing software and language, borrowing from
                  disparate fields such as genetics and blockchain. Also I co-founded left gallery. Based in Berlin. Harm van den Dorpel is an artist
                  dedicated to discovering emergent aesthetics by composing software and language, borrowing from disparate fields such as genetics
                  and blockchain. Also I co-founded left gallery. Based in Berlin.Harm van den Dorpel is an artist dedicated to discovering emergent
                  aesthetics by composing software and language, borrowing from disparate fields such as genetics and blockchain. Also I co-founded
                  left gallery. Based in Berlin.
                </Text>
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default AboutPage
