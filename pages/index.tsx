import Head from 'next/head'
import { AspectRatio, Box, Button, CardBody, CardHeader, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Image from 'next/image'
import logoMercedes from 'public/images/logo-mercedes.png'
import logoHarmStudio from 'public/images/logo-harm-studio.svg'
import Footer from '@ui/components/organisms/footer'
import Card from '@ui/components/organisms/card'
import carbonFiber from 'public/images/carbon-fiber.png'
import Wallet from '@ui/components/molecules/wallet'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
      <Box
        as="main"
        bg={`url('${bg}')`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        w="full"
        h={['full', 'full', 'full', 'full', 'unset']}
        position="relative"
      >
        <Box w="full" h="full" position="absolute" zIndex={1} bg="blackAlpha.800" />
        <Box position="relative" zIndex={2}>
          <Header />
          <Container pt={[10]} pb={[0, 0, 0, 126]} display={['block', 'block', 'block', 'flex']}>
            <Box mb={12} display={['block', 'none']}>
              <Heading as="h1" fontSize={['4rem']} fontWeight="normal" mb={[2]}>
                Maschine
              </Heading>
              <Text as="h2" fontSize={['2xl']} fontWeight="light" lineHeight="7">
                A collection about velocity and perception.
              </Text>
            </Box>
            <Card mb={[10, 10, 10, 0]} boxShadow="md" w={['full', 'full', 'full', '432px']} mr={[0, 0, 0, 8]}>
              <CardHeader p={6} pb={2}>
                <Text color="gray.500">
                  Sale ends in{' '}
                  <Text color="gray.300" as="span" fontWeight="bold">
                    90 minutes
                  </Text>{' '}
                  at{' '}
                  <Text color="gray.300" as="span" fontWeight="bold">
                    0.2 ETH
                  </Text>
                </Text>
              </CardHeader>
              <CardBody px={6} pt={2} pb={8}>
                <AspectRatio maxW="full" w={'auto'} h={['auto', '288px']} ratio={4 / 3} borderTopRadius={8} overflow="hidden">
                  <Image src={carbonFiber} alt="The Maschine Collection" />
                </AspectRatio>
                <Box bg="gray.800" borderBottomRadius={8} p={4} mb={10}>
                  <Heading as="h3" color="gray.300" fontSize={['1.75rem']} fontWeight="normal" mb={[2]}>
                    Maschine
                  </Heading>
                  <Text color="gray.500" fontWeight="light">
                    Created by{' '}
                    <Box
                      as="a"
                      href="#"
                      title="Harm van den Dorpel"
                      target="_blank"
                      color="links.500"
                      _hover={{ color: 'white' }}
                      transition="ease"
                      transitionProperty="color"
                      transitionDuration="0.2s"
                    >
                      Harm van den Dorpel
                    </Box>
                  </Text>
                </Box>
                <Flex mb={8}>
                  <Box flex={1}>
                    <Text color="gray.400" mb={2}>
                      NFTs minted
                    </Text>
                    <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
                      23/1000
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text color="gray.400" mb={2}>
                      Current price
                    </Text>
                    <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
                      1.979 ETH
                    </Text>
                  </Box>
                </Flex>
                <Wallet variant="card" />
              </CardBody>
            </Card>
            <Box maxW={['full', 'full', 'full', '420px', '664px']} pt={[0, 0, 0, 106]}>
              <Box mb={8} display={['none', 'none', 'none', 'block']}>
                <Heading as="h1" fontSize={['4rem']} fontWeight="normal" mb={[2]}>
                  Maschine
                </Heading>
                <Text as="h2" fontSize={['2xl']} fontWeight="light" lineHeight="7">
                  A collection about velocity and perception.
                </Text>
              </Box>
              <Box mb={8} display={['block', 'block', 'block', 'block', 'flex']} flexDirection="column" alignItems="flex-start">
                <Button
                  as="a"
                  fontWeight="normal"
                  rightIcon={<ExternalLinkIcon color="links.500" />}
                  bg="transparent"
                  variant="link"
                  href="#"
                  title="View smart contract in Etherscan"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white' }}
                  transition="ease"
                  transitionProperty="color"
                  transitionDuration="0.2s"
                  mb={2}
                >
                  View smart contract in Etherscan
                </Button>
                <Button
                  as="a"
                  fontWeight="normal"
                  rightIcon={<ExternalLinkIcon color="links.500" />}
                  bg="transparent"
                  variant="link"
                  href="#"
                  title="View smart contract in Etherscan"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white' }}
                  transition="ease"
                  transitionProperty="color"
                  transitionDuration="0.2s"
                >
                  View project GitHub
                </Button>
              </Box>
              <Box mb={8}>
                <Text color="gray.300" fontWeight="bold" mb="6px" fontSize="lg">
                  Description
                </Text>
                <Text color="gray.300" fontWeight="light">
                  Harm van den Dorpel is an artist dedicated to discovering emergent aesthetics by composing software and language, borrowing from
                  disparate fields such as genetics and blockchain.
                </Text>
              </Box>
              <Box mb={120}>
                <Text color="gray.300" fontWeight="bold" mb="6px" fontSize="lg">
                  Benefits
                </Text>
                <Text color="gray.300" fontWeight="light">
                  What Maschine NFT can do:
                </Text>
                <UnorderedList>
                  <ListItem color="gray.300" fontWeight="light">
                    Utility samples
                  </ListItem>
                  <ListItem color="gray.300" fontWeight="light">
                    Utility samples
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Container>
          <Container pb={10}>
            <Flex
              alignItems={['unset', 'unset', 'unset', 'unset', 'center']}
              justifyContent={['unset', 'unset', 'unset', 'unset', 'space-between']}
              flexDir={['column', 'column', 'column', 'column', 'row']}
              mb={[0, 0, 0, 0, 6]}
            >
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="light" lineHeight="7" mb={[4, 4, 4, 4, 0]}>
                By Harm van den Dorpel, in partnership with Mercedes-Benz and Fingerprints DAO.
              </Text>
              <Flex>
                <Box as="a" href="https://harm.work" title="Harm Studio" target="_blank" mr={[4, 6]}>
                  <Image src={logoHarmStudio} alt="Harm Studio" width={42} height={42} />
                </Box>
                <Box as="a" href="https://www.mercedes-benz.com/en" title="Mercedes Benz" target="_blank">
                  <Image src={logoMercedes} alt="Harm Studio" width={42} height={42} />
                </Box>
              </Flex>
            </Flex>
          </Container>
          <Footer />
        </Box>
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

  const bgs = [
    '/images/animated-1.gif',
    '/images/animated-2.gif',
    '/images/animated-3.gif',
    '/images/animated-4.gif',
    '/images/animated-5.gif',
    '/images/animated-6.gif',
  ]

  const bg = bgs[Math.floor(Math.random() * bgs.length)]

  return {
    props: {
      bg,
      meta,
    },
  }
}
