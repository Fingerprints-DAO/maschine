import { AspectRatio, Box, Button, CardBody, CardHeader, Flex, Heading, Link, Skeleton, Text, Tooltip } from '@chakra-ui/react'
import Card from '../card'
import Image from 'next/image'
import Wallet from '@ui/components/molecules/wallet'
import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import { useIsBrowser } from '@ui/hooks/use-is-browser'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { useEffect, useMemo } from 'react'
import dayjs from 'dayjs'
import useCountdownTime from '@ui/hooks/use-countdown-timer'
import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import useGetLastPrice from '@web3/contracts/dutch-auction/use-get-last-price'
import { formatEther } from 'ethers/lib/utils.js'
import { pluralize } from 'utils/string'

type NftCardProps = {
  cardImageNumber: string
}

const handleMinutes = (time: number) => {
  if (time <= 0) {
    return 'less than a minute'
  }

  return pluralize(time, 'minutes', 'minute')
}

const NftCard = ({ cardImageNumber }: NftCardProps) => {
  const isBrowser = useIsBrowser()
  const { handleOpenModal } = useModalContext()
  const { countdown } = useCountdownTime()
  const { isConnected, canInteract, config, auctionState, isLimitReached, currentSupply, maxSupply } = useMaschineContext()
  const { currentPrice, status } = useGetCurrentPrice()
  const { lastPrice, refetch: refetchLastPrice } = useGetLastPrice()

  const renderButton = useMemo(() => {
    if (!isBrowser) {
      return <div />
    }

    if (!isConnected) {
      return (
        <Box mt={8}>
          <Wallet variant="card" />
        </Box>
      )
    }

    if (auctionState === AUCTION_STATE.SOLD_OUT) {
      return (
        <Button color="gray.500" cursor="no-drop" borderColor="gray.500" variant="outline" disabled={true} h={16} w="full" size="lg" mt={8}>
          Sold out
        </Button>
      )
    }

    if (!canInteract || isLimitReached) {
      return (
        <Tooltip
          label={
            canInteract ? (
              `We regret to inform you that you have hit the Maschine NFT minting limit. The maximum wallet limit is ${
                config?.limit && config?.limit
              } ETH, and you cannot mint any more tokens at the moment. However, do keep a close watch on prices, and when they dip, utilize your rebate to mint more tokens.`
            ) : (
              <>
                It seems like you are not eligible to mint an Maschine NFT. Please{' '}
                <Box as={Link} href="terms-and-conditions" textDecoration="underline">
                  read our terms
                </Box>{' '}
                for more information.
              </>
            )
          }
          fontSize="sm"
          bg="whiteAlpha.900"
          color={'gray.900'}
          textAlign="center"
          placement="auto"
          hasArrow={true}
          arrowSize={8}
          borderRadius="8px"
        >
          <Button
            color="gray.500"
            cursor="no-drop"
            borderColor="gray.500"
            leftIcon={<HiOutlineLockClosed />}
            variant="outline"
            disabled={true}
            h={16}
            w="full"
            size="lg"
            mt={8}
          >
            Mint unavailable
          </Button>
        </Tooltip>
      )
    }

    if (auctionState === AUCTION_STATE.STARTED && isLimitReached !== null) {
      return (
        <Button variant="white" size="lg" w="full" mt={8} onClick={handleOpenModal(ModalElement.Buy)}>
          Buy
        </Button>
      )
    }

    return <Skeleton w="full" h={16} mt={8} rounded="8px" />
  }, [isBrowser, isConnected, auctionState, canInteract, isLimitReached, config?.limit, handleOpenModal])

  const renderTimer = useMemo(() => {
    if (auctionState === AUCTION_STATE.NOT_STARTED) {
      return (
        <Skeleton isLoaded={countdown > 0}>
          <Text color="gray.500">
            Sales starts in{' '}
            <Text color="gray.300" as="span" fontWeight="bold">
              {handleMinutes(countdown)}
            </Text>{' '}
            at{' '}
            <Text color="gray.300" as="span" fontWeight="bold">
              {formatEther(config?.startAmountInWei?.toString() ?? 0)} ETH
            </Text>
          </Text>
        </Skeleton>
      )
    }

    if (auctionState === AUCTION_STATE.STARTED) {
      return (
        <Skeleton isLoaded={countdown > 0}>
          <Text color="gray.500">
            Sales ends in{' '}
            <Text color="gray.300" as="span" fontWeight="bold">
              {handleMinutes(countdown)}
            </Text>{' '}
            at{' '}
            <Text color="gray.300" as="span" fontWeight="bold">
              {formatEther(config?.endAmountInWei?.toString() ?? 0)} ETH
            </Text>
          </Text>
        </Skeleton>
      )
    }

    if (auctionState === AUCTION_STATE.REBATE_STARTED) {
      return <Text color="gray.500">Maschine auction ended</Text>
    }
    if (auctionState === AUCTION_STATE.ENDED) {
      const endTime = dayjs.unix(config?.endTime?.toNumber() || 0)
      const endTimeWithDelay = endTime.add(config?.refundDelayTime || 0, 'seconds')
      const now = dayjs()

      const rebate = endTimeWithDelay.diff(now, 'minutes')

      return (
        <Text color="gray.500">
          Rebate will start in{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {handleMinutes(rebate)}
          </Text>
        </Text>
      )
    }

    return null
  }, [countdown, auctionState, config?.startAmountInWei, config?.endAmountInWei, config?.endTime, config?.refundDelayTime])

  useEffect(() => {
    if ([AUCTION_STATE.ENDED, AUCTION_STATE.REBATE_STARTED, AUCTION_STATE.SOLD_OUT].includes(auctionState)) refetchLastPrice()
  }, [auctionState, refetchLastPrice])

  return (
    <Card mb={[10, 10, 10, 0]} boxShadow="md" w={['full', 'full', 'full', '432px']} mr={[0, 0, 0, 8]}>
      <CardHeader p={6} pb={2}>
        {renderTimer}
      </CardHeader>
      <CardBody px={6} pt={2} pb={8}>
        <AspectRatio maxW="full" w="auto" h="auto" ratio={4 / 4} borderTopRadius={8} overflow="hidden">
          <Box
            as={Image}
            alt="The Maschine Collection"
            src={require(`public/images/nfts/${cardImageNumber}.jpg`)}
            priority={true}
            width={470}
            height={470}
          />
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
        <Flex>
          <Box flex={1} mr={'20px'}>
            <Text color="gray.400" mb={2}>
              NFTs minted
            </Text>
            <Skeleton isLoaded={!!(currentSupply && maxSupply)}>
              <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
                {[AUCTION_STATE.STARTED, AUCTION_STATE.NOT_STARTED].includes(auctionState) && `${currentSupply}/${maxSupply}`}
                {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT, AUCTION_STATE.REBATE_STARTED].includes(auctionState) && `${currentSupply}`}
              </Text>
            </Skeleton>
          </Box>
          <Box flex={1}>
            <Text color="gray.400" mb={2}>
              {auctionState === AUCTION_STATE.NOT_STARTED && 'Initial price'}
              {auctionState === AUCTION_STATE.STARTED && 'Current price'}
              {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT].includes(auctionState) && 'Final price'}
              {auctionState === AUCTION_STATE.REBATE_STARTED && 'Mint price'}
            </Text>
            <Skeleton isLoaded={!(status === 'loading')}>
              <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
                {[AUCTION_STATE.NOT_STARTED, AUCTION_STATE.STARTED].includes(auctionState) && currentPrice}
                {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT, AUCTION_STATE.REBATE_STARTED].includes(auctionState) && lastPrice}
                {` ETH`}
              </Text>
            </Skeleton>
          </Box>
        </Flex>
        {![AUCTION_STATE.NOT_STARTED, AUCTION_STATE.REBATE_STARTED, AUCTION_STATE.ENDED].includes(auctionState) && renderButton}
      </CardBody>
    </Card>
  )
}

export default NftCard
