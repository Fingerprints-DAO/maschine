import { AspectRatio, Box, Container, Text } from '@chakra-ui/react'
import Footer from '@ui/components/organisms/footer'
import Header from '@ui/components/organisms/header'
import Head from 'next/head'
import Image from 'next/image'
import hero from 'public/images/still.jpg'
import image2 from 'public/images/aboutanimation.gif'
import aHarmVanDenDorpel from 'public/images/harm-profile.webp'
import fingerPrintsThumb from 'public/images/fpthumb.jpg'
import mercedesThumb from 'public/images/mnxt.png'
import { Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Maschine | About</title>
      </Head>
      <Box as="main">
        <Header />
        <Container>
          <Box as="section" display={'flex'} flexDir={'column'} pt={10} gap={28}>
            <Box borderRadius={8} overflow={'hidden'} order={[3, 3, 1]}>
              <AspectRatio maxW="100%" ratio={1.5}>
                <iframe
                  height="500"
                  title="Harm Interview"
                  src="https://www.youtube-nocookie.com/embed/HrRGckSIiEQ?autohide=1&showinfo=0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
            </Box>

            <Box display={['block', 'flex']} flexDir={['column', 'column', 'row']} gap={12} order={1}>
              <Box mt={[3]} mb={[5, 5, 0]}>
                <AspectRatio w={['100%', '100%', 250, 350, 450]} ratio={1} borderRadius={8} overflow="hidden">
                  <Image src={hero} alt="The Maschine Collection" />
                </AspectRatio>
              </Box>

              <Box flex={1} order={[2, 2, 1]}>
                <Text as="h3" fontWeight="bold" fontSize={['4xl']} mb={6}>
                  The Maschine Collection
                </Text>
                <Stack spacing={3} color="gray.300" fontSize={['lg', 'lg', 'xl']} lineHeight="7">
                  <Text>
                    Maschine is a collection exploring velocity and perception, consisting of 1,000 unique generative artworks which depict radial
                    arrangements that spin at varying speeds.
                  </Text>
                  <Text>
                    When objects move really fast, the human eye is not able to properly process the phenomena, instead merging the images into a
                    blur. This creates an illusion called the stroboscopic effect, which distances our senses from reality.
                  </Text>
                  <Text>
                    While rarely observed in nature due to the high speeds involved, with the advent of the machine age, the stroboscopic effect can
                    be seen in car wheels, propellers, turbines, and all sorts of engine-driven machines.
                  </Text>
                  <Text>
                    With rotating objects, depending on the ratio of the object's radial speed to your eyes' maximum frame rate, it will appear to
                    stay stationary or even move backwards.
                  </Text>
                </Stack>
              </Box>
            </Box>

            <Box display={['block', 'flex']} flexDir={['column', 'column', 'row']} gap={12} order={2}>
              <Box mt={[3]} mb={[5, 5, 0]} order={[1, 1, 2]}>
                <AspectRatio w={['100%', '100%', 250, 350, 450]} ratio={1} borderRadius={8} overflow="hidden">
                  <Image src={image2} alt="A Harm van den Dorpel artwork" />
                </AspectRatio>
              </Box>

              <Box flex={1} order={[2, 2, 1]}>
                <Text as="h3" fontWeight="bold" fontSize={['4xl']} mb={6}>
                  How it Works
                </Text>
                <Stack spacing={3} color="gray.300" fontSize={['lg', 'lg', 'xl']} lineHeight="7">
                  <Text>
                    Maschine recreates this illusion with a 3D WebGL script, rendering the image natively in web browsers without the use of plug-ins,
                    while also allowing for low-level control of the rendered animations.
                  </Text>
                  <Text>
                    Large media assets and libraries were coupled with the source code created by the artist, producing the mesmerizing aesthetics in
                    the final artwork.
                  </Text>
                  <Text>
                    Each piece is made unique through the randomization of a large number of aesthetic parameters, such as number of spokes, colors,
                    rotation speed and lighting effects.
                  </Text>
                  <Text>
                    Too large for direct on-chain storage due to their complexity, they are stored on IPFS as they are generated and subsequently
                    assigned to collectors in the collection’s smart contract during the minting process.
                  </Text>
                </Stack>
              </Box>
            </Box>

            <Box display={['block', 'flex']} flexDir={['column', 'column', 'row']} gap={12} order={4}>
              <Box mt={[3]} mb={[5, 5, 0]} order={[1, 1, 2]}>
                <AspectRatio w={['100%', '100%', 250, 350, 450]} ratio={1} borderRadius={8} overflow="hidden">
                  <Image src={aHarmVanDenDorpel} alt="A Harm van den Dorpel artwork" />
                </AspectRatio>
              </Box>

              <Box flex={1} order={[1, 1, 2]}>
                <Text as="h3" fontWeight="bold" fontSize={['4xl']} mb={6}>
                  A Harm van den Dorpel Artwork
                </Text>
                <Stack spacing={3} color="gray.300" fontSize={['lg', 'lg', 'xl']} lineHeight="7">
                  <Text>
                    Berlin-based artist{' '}
                    <Link isExternal color={'#6ECCDD'} href="https://harm.work/">
                      Harm van den Dorpel
                    </Link>{' '}
                    began creating blockchain-based artworks in 2015. His art is dedicated to discovering emergent aesthetics by composing software
                    and language.
                  </Text>
                  <Text>
                    His previous works using NFTs include very early experiments and celebrated collections such as Mutant Garden Seeder, of which
                    Fingerprints DAO is the largest holder.
                  </Text>
                  <Text>
                    His work has been internationally exhibited at institutions including Museum Kurhaus Kleve, the New Museum in New York, the Ullens
                    Center for Contemporary Art in Beijing, China, the Museum of Modern Art, Warsaw, and the Netherlands Media Art Institute,
                    Amsterdam.
                  </Text>
                </Stack>
              </Box>
            </Box>

            <Box display={['block', 'flex']} flexDir={['column', 'column', 'row']} gap={12} order={5}>
              <Box mt={[3]} mb={[5, 5, 0]} order={[1, 1, 2]}>
                <AspectRatio w={['100%', '100%', 250, 350, 450]} ratio={1} borderRadius={8} overflow="hidden">
                  <Image src={mercedesThumb} alt="Mercedes-Benz NXT" />
                </AspectRatio>
              </Box>

              <Box flex={1} order={[2, 2, 1]}>
                <Text as="h3" fontWeight="bold" fontSize={['4xl']} mb={6}>
                  In Collaboration with Mercedes-Benz NXT
                </Text>
                <Stack spacing={3} color="gray.300" fontSize={['lg', 'lg', 'xl']} lineHeight="7">
                  <Text>
                    Mercedes-Benz’s history spans more than 130 years. Throughout this period, many of its products have become collectibles — from
                    vehicles to model cars to memorabilia and more.
                  </Text>
                  <Text>
                    Having been born in the height of the machine age, the collection rhymes with the original Mercedes-Benz's vision for universal
                    motorization.
                  </Text>
                  <Text>
                    <Link isExternal color={'#6ECCDD'} href="https://nxt.mercedes-benz.com/">
                      Mercedes-Benz NXT
                    </Link>{' '}
                    aims to bring this collectibility to the digital realm.
                  </Text>
                </Stack>
              </Box>
            </Box>

            <Box display={['block', 'flex']} flexDir={['column', 'column', 'row']} gap={12} order={6}>
              <Box mt={[3]} mb={[5, 5, 0]} order={[2, 2, 1]}>
                <AspectRatio w={['100%', '100%', 250, 350, 450]} ratio={1} borderRadius={8} overflow="hidden">
                  <Image src={fingerPrintsThumb} alt="And Fingerprints DAO" />
                </AspectRatio>
              </Box>

              <Box flex={1} order={[1, 1, 2]}>
                <Text as="h3" fontWeight="bold" fontSize={['4xl']} mb={6}>
                  And Fingerprints DAO
                </Text>
                <Stack spacing={3} color="gray.300" fontSize={['lg', 'lg', 'xl']} lineHeight="7">
                  <Text>
                    Described as the home of blockchain art,{' '}
                    <Link isExternal color={'#6ECCDD'} href="https://fingerprintsdao.xyz">
                      Fingerprints
                    </Link>{' '}
                    is an organization dedicated to collecting and supporting notable art built on top of blockchain technology.
                  </Text>
                  <Text>
                    Consisting of over 250 collectors, its open community manages a shared treasury and notable collection of NFT art assembled by its
                    curatorial committee.
                  </Text>
                  <Text>Fingerprints and its community are excited to support the creation and auctioning of this collection.</Text>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default AboutPage
