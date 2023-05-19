import { AspectRatio, Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'
import Image from 'next/image'
import hero from 'public/images/img2.jpg'
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
            <Text as="h3" color="gray.50" fontWeight="bold" fontSize={['4xl', '4xl', '4xl', '4xl', '5xl']} lineHeight="55px" mb={6}>
              The Maschine Collection
            </Text>
            <Box mb={[16, '72px']} display={['block', 'flex']} flexDir="row">
              <AspectRatio
                maxW="full"
                w={['auto', '316px']}
                h={['auto', '288px']}
                ratio={1}
                borderRadius={8}
                overflow="hidden"
                mb={[8, 0]}
                mr={[0, 8]}
              >
                <Image src={hero} alt="The Maschine Collection" />
              </AspectRatio>
              <Text fontWeight="light" color="gray.300" fontSize="lg" lineHeight="7">
                Maschine is an artwork inspired by speed and its effects on human perception. It draws
              </Text>
            </Box>

            <Text as="h3" color="gray.50" fontWeight="bold" fontSize={['4xl', '4xl', '4xl', '4xl', '5xl']} lineHeight="55px" mb={6}>
              A Harm van den Dorpel artwork
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
                <Image src={aHarmVanDenDorpel} alt="A Harm van den Dorpel artwork" />
              </AspectRatio>
              <Box flex={1}>
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

            <Text as="h3" color="gray.50" fontWeight="bold" fontSize={['4xl', '4xl', '4xl', '4xl', '5xl']} lineHeight="55px" mb={6}>
              In Partnership with Fingerprints
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
                <Image src={fingerPrintsThumb} alt="By Fingerprints community" />
              </AspectRatio>
              <Box flex={1}>
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
