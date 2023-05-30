import Head from 'next/head'
import { Box, Button, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Image from 'next/image'
import logoMercedes from 'public/images/logo-mercedes.png'
import logoHarmStudio from 'public/images/logo-harm-studio.svg'
import Footer from '@ui/components/organisms/footer'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NftCard from '@ui/components/organisms/nft-card'
import MintCta from '@ui/components/organisms/mint-cta'
import useMediaQuery from '@ui/hooks/use-media-query'
import { useIsBrowser } from '@ui/hooks/use-is-browser'
import RebateCta from '@ui/components/organisms/rebate-cta'
import Unavailability from '@ui/components/organisms/unavailability'
import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import { useEffect, useMemo, useState } from 'react'
import useGetClaimableTokens from '@web3/contracts/dutch-auction/use-get-claimable-tokens'
import dayjs from 'dayjs'

type HomeProps = {
  meta: {
    title: string
    description: string
    navPage: string
    image: string
  }
  bg: string
  cardImageNumber: string
}

const now = dayjs()

const HomePage = ({ meta, bg, cardImageNumber }: HomeProps) => {
  const isBrowser = useIsBrowser()
  const isMobile = useMediaQuery('(max-width: 479px)')

  const { data: claimableCount } = useGetClaimableTokens()
  const { canInteract, config, auctionState } = useMaschineContext()

  const [isWarningVisible, setIsWarningVisible] = useState(true)

  useEffect(() => {
    setIsWarningVisible(canInteract)
  }, [canInteract])

  const handleCloseWarning = () => setIsWarningVisible(false)

  const isRebateAvailable = useMemo(() => {
    const end = config?.endTime?.toNumber()

    if (!end || !config?.refundDelayTime) {
      return false
    }

    const delay = dayjs.unix(end).add(config.refundDelayTime, 'minutes')

    return now.isAfter(delay)
  }, [config?.refundDelayTime, config?.endTime])

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Box
        as="main"
        bg={`url('${bg || ''}')`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        w="full"
        h={['full', 'full', 'full', 'unset']}
        position="relative"
      >
        <Box w="full" h="full" position="absolute" zIndex={1} bg="blackAlpha.800" />
        <Box position="relative" zIndex={2}>
          {!isWarningVisible && <Unavailability onClose={handleCloseWarning} />}
          <Header />
          <Container pt={[10]} pb={[0, 0, 0, '72px']} display={['block', 'block', 'block', 'flex']}>
            <Box mb={12} display={['block', 'none']}>
              <Heading as="h1" fontSize={['4rem']} fontWeight="normal" mb={[2]}>
                Maschine
              </Heading>
              <Text as="h2" fontSize={['2xl']} fontWeight="light" lineHeight="7">
                A collection about velocity and perception.
              </Text>
            </Box>
            <NftCard cardImageNumber={cardImageNumber} />
            {isMobile && isBrowser && (
              <>
                <MintCta />
                <RebateCta />
              </>
            )}
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
                  rightIcon={<ExternalLinkIcon color="links.500" transition="ease" transitionProperty="color" transitionDuration="0.2s" />}
                  bg="transparent"
                  variant="link"
                  href="#"
                  title="View smart contract in Etherscan"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white', '> span svg': { color: 'white' } }}
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
                  rightIcon={<ExternalLinkIcon color="links.500" transition="ease" transitionProperty="color" transitionDuration="0.2s" />}
                  bg="transparent"
                  variant="link"
                  href="#"
                  title="View smart contract in Etherscan"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white', '> span svg': { color: 'white' } }}
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
          {(Boolean(claimableCount) || isRebateAvailable) && !isMobile && isBrowser && (
            <Container mb={24}>
              {Boolean(claimableCount) && <MintCta />}
              {auctionState === AUCTION_STATE.ENDED && <RebateCta />}
            </Container>
          )}
          <Container mb={10}>
            <Flex
              alignItems={['unset', 'unset', 'unset', 'unset', 'center']}
              justifyContent={['unset', 'unset', 'unset', 'unset', 'space-between']}
              flexDir={['column', 'column', 'column', 'column', 'row']}
            >
              <Text fontSize={['lg', 'xl', '2xl']} fontWeight="200" lineHeight="7" mb={[4, 4, 4, 4, 0]}>
                By Harm van den Dorpel, in partnership with Mercedes-Benz and Fingerprints DAO.
              </Text>
              <Flex>
                <Box as="a" href="https://harm.work" title="Harm Studio" target="_blank" mr={[4, 6]}>
                  <Box as={Image} src={logoHarmStudio} alt="Harm Studio" width={42} height={42} />
                </Box>
                <Box as="a" href="https://www.mercedes-benz.com/en" title="Mercedes Benz" target="_blank">
                  <Box as={Image} src={logoMercedes} alt="Harm Studio" width={42} height={42} />
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
    image: '/images/maschine-og-image.jpg',
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

  const NFTS_IMAGES_COUNT = 10
  const cardImageNumber = Math.floor(Math.random() * NFTS_IMAGES_COUNT) + 1

  return {
    props: {
      cardImageNumber,
      meta,
      ...(process.env.NODE_ENV !== 'development' && { bg }),
    },
  }
}

export default HomePage
