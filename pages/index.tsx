import Head from 'next/head'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Image from 'next/image'
import logoMercedes from 'public/images/logo-mercedes.png'
import logoHarmStudio from 'public/images/logo-harm-studio.svg'
import Footer from '@ui/components/organisms/footer'
import Container from '@ui/components/molecules/container'

type HomeProps = {
  meta: {
    title: string
    description: string
    navPage: string
    image: string
  }
  bg: string
}

export default function Home({ meta, bg }: HomeProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Box as="main" bg={`url('${bg}')`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" w="full" h="full" position="relative">
        <Box w="full" h="full" position="absolute" zIndex={1} bg="blackAlpha.700" />
        <Flex as="div" position="relative" zIndex={2} flexDir="column" h="full">
          <Header />
          <Container as={Flex} py={['8', '20']} flex={1} flexDir="column" justifyContent="space-between">
            <Box>
              <Heading as="h1" fontSize={['3rem', '4rem']} fontWeight="normal" mb={[4, 6]}>
                Maschine
              </Heading>
              <Text as="h2" fontSize={['xl', '2xl']} fontWeight="200" lineHeight="7">
                Coming soon — a collection about velocity and perception.
              </Text>
            </Box>
            <Box>
              <Text fontSize={['xl', '2xl']} fontWeight="200" lineHeight="7" mb={[4, 6]}>
                By Harm van den Dorpel, in partnership with Mercedes-Benz and Fingerprints DAO.
              </Text>
              <Flex>
                <Box as="a" href="https://harm.work" title="Harm Studio" target="_blank" mr={[3, 6]}>
                  <Image src={logoHarmStudio} alt="Harm Studio" width={42} height={42} />
                </Box>
                <Box as="a" href="https://www.mercedes-benz.com/en" title="Mercedes Benz" target="_blank">
                  <Image src={logoMercedes} alt="Harm Studio" width={42} height={42} />
                </Box>
              </Flex>
            </Box>
          </Container>
          <Footer />
        </Flex>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const meta = {
    title: 'Maschine',
    description: 'A project by Harm van den Dorpel in partnership with Mercedes-Benz and Fingerprints DAO.',
    navPage: 'home',
    image: '/images/seo-5.png',
  }

  let bgs = ['/images/animated-1.gif', '/images/animated-2.gif', '/images/animated-3.gif']

  let bg = bgs[Math.floor(Math.random() * bgs.length)]

  return { props: { bg, meta } }
}
