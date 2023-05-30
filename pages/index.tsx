import Head from 'next/head'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Image from 'next/image'
import logoMercedes from 'public/images/logo-nxt.svg'
import logoHarmStudio from 'public/images/logo-harm-studio.svg'
import { getBaseURL } from './api/helpers/_getLink'

type HomeProps = {
  meta: {
    title: string
    description: string
    navPage: string
    image: string
  }
  bg: string
  cookieBanner: JSX.Element
}

export default function Home({ meta, bg, cookieBanner }: HomeProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <meta property="og:image" content={meta.image} />
        <meta property="twitter:image" content={meta.image} /> */}
      </Head>
      <Box as="main" bg={`url('${bg}')`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" w="full" h="full" position="relative">
        <Box w="full" h="full" position="absolute" zIndex={1} bg="blackAlpha.600" />
        <Flex as="div" position="relative" zIndex={2} flexDir="column" h="full">
          <Header />
          <Container as={Flex} pt={['8', '20']} pb={['14', '20']} flex={1} flexDir="column" justifyContent="space-between">
            <Box>
              <Heading as="h1" fontSize={['3rem', '4rem']} fontWeight="normal" mb={[4, 6]}>
                Maschine
              </Heading>
              <Text as="h2" fontSize={['xl', '2xl']} fontWeight="light" lineHeight="7">
                Coming soon — a collection about velocity and perception.
              </Text>
            </Box>
            <Flex
              alignItems={['unset', 'unset', 'unset', 'unset', 'center']}
              justifyContent={['unset', 'unset', 'unset', 'unset', 'space-between']}
              flexDir={['column', 'column', 'column', 'column', 'row']}
              mb={[0, 0, 0, 0, 6]}
            >
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="light" lineHeight="7" mb={[4, 4, 4, 4, 0]}>
                By Harm van den Dorpel, in collaboration with Mercedes-Benz and Fingerprints DAO.
              </Text>
              <Flex>
                <Box as="a" href="https://harm.work" title="Harm Studio" target="_blank" mr={[4, 6]}>
                  <Image src={logoHarmStudio} alt="Harm Studio" width={50} height={50} />
                </Box>
                <Box as="a" href="https://nxt.mercedes-benz.com" title="Mercedes Benz" target="_blank">
                  <Image src={logoMercedes} alt="Harm Studio" width={110} height={110} />
                </Box>
              </Flex>
            </Flex>
          </Container>
          {cookieBanner}
        </Flex>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const meta = {
    title: 'Maschine',
    description: 'A project by Harm van den Dorpel in collaboration with Mercedes-Benz and Fingerprints DAO.',
    navPage: 'home',
    // image: `/images/seo.jpg`,
  }

  let bgs = [
    '/images/animated-1.gif',
    '/images/animated-2.gif',
    '/images/animated-3.gif',
    '/images/animated-4.gif',
    '/images/animated-5.gif',
    '/images/animated-6.gif',
  ]

  let bg = bgs[Math.floor(Math.random() * bgs.length)]

  return {
    props: {
      bg,
      meta,
    },
  }
}
