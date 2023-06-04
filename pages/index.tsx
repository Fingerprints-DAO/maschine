import Head from 'next/head'
import { Box, Button, Container, Flex, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Header from '@ui/components/organisms/header'
import Image from 'next/image'
import logoMercedes from 'public/images/logo-nxt.svg'
import logoHarmStudio from 'public/images/logo-harm-studio.svg'
import Footer from '@ui/components/organisms/footer'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NftCard from '@ui/components/organisms/nft-card'
import MintCta from '@ui/components/organisms/mint-cta'
import RebateCta from '@ui/components/organisms/rebate-cta'
import BannerMessage from '@ui/components/organisms/banner-message'
import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import { useEffect, useMemo, useRef, useState } from 'react'
import useGetClaimableTokens from '@web3/contracts/dutch-auction/use-get-claimable-tokens'
import { HiOutlineLockClosed } from 'react-icons/hi'
import NextLink from 'next/link'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'

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

const HomePage = ({ meta, bg, cardImageNumber }: HomeProps) => {
  const { claimableCount } = useGetClaimableTokens()
  const { address, canInteract, config, isLimitReached, auctionState } = useMaschineContext()
  const { data: userData } = useGetUserData(address)

  const limitBannerRef = useRef<HTMLDivElement>(null)
  const [limitBannerHeight, setLimitBannerHeight] = useState(0)
  const [isWarningVisible, setIsWarningVisible] = useState(true)
  const [isLimitBannerVisible, setIsLimitBannerVisible] = useState(false)

  const handleCloseWarning = () => {
    setIsWarningVisible(false)
    setLimitBannerHeight(0)
  }

  const handleCloseLimitBanner = () => {
    setIsLimitBannerVisible(false)
    setLimitBannerHeight(0)
  }

  const renderStageFeatures = useMemo(
    () => (
      <>
        {auctionState === AUCTION_STATE.STARTED && <MintCta claimableCount={claimableCount} />}
        {auctionState === AUCTION_STATE.REBATE_STARTED && <RebateCta />}
      </>
    ),
    [auctionState, claimableCount]
  )

  useEffect(() => {
    setIsWarningVisible(canInteract)
  }, [canInteract])

  useEffect(() => {
    setIsLimitBannerVisible(auctionState === AUCTION_STATE.STARTED && !!isLimitReached)
  }, [auctionState, isLimitReached])

  useEffect(() => {
    if (limitBannerRef.current) {
      const height = limitBannerRef.current.offsetHeight
      setLimitBannerHeight(height)
    }
  }, [])

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
        pt={`${limitBannerHeight}px`}
      >
        <Box w="full" h="full" position="absolute" zIndex={1} bg="blackAlpha.800" />
        <Box position="relative" zIndex={2}>
          {!isWarningVisible && (
            <BannerMessage bg="#F76B8B" icon={HiOutlineLockClosed} onClose={handleCloseWarning}>
              <Text color="gray.900" fontSize="lg" fontWeight="bold" ml={2}>
                It seems like you are not eligible to mint an Maschine NFT. Please{' '}
                <Box as={Link} href="terms-and-conditions" textDecoration="underline">
                  read our terms
                </Box>{' '}
                for more information.
              </Text>
            </BannerMessage>
          )}
          {isLimitBannerVisible && (
            <BannerMessage ref={limitBannerRef} bg="gray.300" position="fixed" icon={HiOutlineLockClosed} onClose={handleCloseLimitBanner}>
              <Text color="gray.900" fontSize="lg" fontWeight="bold" ml={2} pr={6}>
                You've hit the Maschine NFT minting limit! Max wallet limit is {config?.limit && config?.limit} ETH. Use your rebate to mint more
                during price drops.
              </Text>
            </BannerMessage>
          )}
          <Header />
          <Container pt={[10]} pb={[0, 0, 0, '72px']} display={['block', 'block', 'block', 'flex']}>
            <Box mb={12} display={['block', 'none']}>
              <Heading as="h1" fontSize={['4rem']} fontWeight="normal" mb={[2]}>
                Maschine
              </Heading>
              <Text as="h2" fontSize={['2xl']} lineHeight="7">
                A collection about velocity and perception.
              </Text>
            </Box>
            <NftCard cardImageNumber={cardImageNumber} />
            <Box hideFrom={'lg'} mb={{ base: 8, lg: 0 }} hidden={AUCTION_STATE.REBATE_STARTED === auctionState && userData?.tokensBidded! < 1}>
              {renderStageFeatures}
            </Box>
            <Box maxW={['full', 'full', 'full', '420px', '664px']} pt={[0, 0, 0]}>
              <Box mb={8} display={['none', 'none', 'none', 'block']} mt={3}>
                <Heading as="h1" fontSize={['4rem']} fontWeight="normal" mb={[2]}>
                  Maschine
                </Heading>
                <Text as="h2" fontSize={['2xl']} lineHeight="7">
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
                  href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}address/${process.env.NEXT_PUBLIC_MASCHINE_CONTRACT_ADDRESS}`}
                  title="View NFT smart contract"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white', '> span svg': { color: 'white' } }}
                  transition="ease"
                  transitionProperty="color"
                  transitionDuration="0.2s"
                  mb={2}
                >
                  View NFT smart contract
                </Button>
                <Button
                  as="a"
                  fontWeight="normal"
                  rightIcon={<ExternalLinkIcon color="links.500" transition="ease" transitionProperty="color" transitionDuration="0.2s" />}
                  bg="transparent"
                  variant="link"
                  href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}address/${process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS}`}
                  title="View dutch auction smart contract"
                  target="_blank"
                  color="links.500"
                  _hover={{ color: 'white', '> span svg': { color: 'white' } }}
                  transition="ease"
                  transitionProperty="color"
                  transitionDuration="0.2s"
                  mb={2}
                >
                  View dutch auction smart contract
                </Button>
                <Button
                  as="a"
                  fontWeight="normal"
                  rightIcon={<ExternalLinkIcon color="links.500" transition="ease" transitionProperty="color" transitionDuration="0.2s" />}
                  bg="transparent"
                  variant="link"
                  href="https://github.com/Fingerprints-DAO/maschine-contracts"
                  title="View project GitHub"
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
              <Box>
                <Text color="gray.300" fontWeight="bold" mb="6px" fontSize="lg">
                  Description
                </Text>
                <Text as={'p'} color="gray.300">
                  Harm van den Dorpel is an artist dedicated to discovering emergent aesthetics by composing software and language, borrowing from
                  disparate fields such as genetics and blockchain.
                </Text>
                <br />
                <Text as={'p'} color="gray.300">
                  Maschine reproduces the stroboscopic effect through a 3D WebGL generative script. You'll be able to view and interact with the
                  minted piece directly in Opensea once the mint is completed.
                </Text>
                <br />
                <Text as={'p'} color="gray.300">
                  <Link as={NextLink} href={'/about'} _hover={{ textDecor: 'underline' }} color={'white'} fontWeight={'bold'}>
                    Read more
                  </Link>{' '}
                  about the collection on our about page.
                </Text>
              </Box>
            </Box>
          </Container>

          <Container
            mb={AUCTION_STATE.REBATE_STARTED === auctionState && userData?.tokensBidded! < 1 ? 24 : 0}
            hideBelow={'lg'}
            hidden={AUCTION_STATE.REBATE_STARTED === auctionState && userData?.tokensBidded! < 1}
          >
            {renderStageFeatures}
          </Container>
          <Container mb={10} mt={{ base: 20, lg: 0 }}>
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
                <Box as="a" href="https://nxt.mercedes-benz.com" title="Mercedes Benz" target="_blank">
                  <Image src={logoMercedes} alt="Harm Studio" width={110} height={110} />
                </Box>
              </Flex>
            </Flex>
            <Footer />
          </Container>
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
