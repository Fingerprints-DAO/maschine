import { AspectRatio, Box, Button, CardBody, CardHeader, Flex, Heading, Skeleton, Text } from '@chakra-ui/react'
import Card from '../card'
import Image from 'next/image'
import Wallet from '@ui/components/molecules/wallet'
import { AUCTION_STATE, useMaschineContext } from '@ui/contexts/maschine'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import { useIsBrowser } from '@ui/hooks/use-is-browser'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { useEffect, useMemo } from 'react'
import { ethers } from 'ethers'
import dayjs from 'dayjs'
import useCountdownTime from '@ui/hooks/use-countdown-timer'
import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import useGetLastPrice from '@web3/contracts/dutch-auction/use-get-last-price'

type NftCardProps = {
  cardImageNumber: string
}

const handleMinutes = (time: number) => `minute${time > 1 ? 's' : ''}`

const NftCard = ({ cardImageNumber }: NftCardProps) => {
  const isBrowser = useIsBrowser()
  const { handleOpenModal } = useModalContext()
  const { countdown } = useCountdownTime()
  const { isConnected, canInteract, config, auctionState, isLimitReached, currentSupply, maxSupply } = useMaschineContext()
  const { currentPrice } = useGetCurrentPrice()
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

    if (!canInteract || isLimitReached || auctionState === AUCTION_STATE.ENDED) {
      return (
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
          {auctionState === AUCTION_STATE.ENDED && 'Mint ended'}
          {auctionState !== AUCTION_STATE.ENDED && 'Mint unavailable'}
        </Button>
      )
    }

    if (auctionState === AUCTION_STATE.STARTED) {
      return (
        <Button variant="white" size="lg" w="full" mt={8} onClick={handleOpenModal(ModalElement.Buy)}>
          Buy
        </Button>
      )
    }

    return <Skeleton w="full" h={16} startColor="gray.100" endColor="gray.300" rounded="8px" mt={8} />
  }, [isBrowser, isConnected, canInteract, auctionState, handleOpenModal, isLimitReached])

  const renderTimer = useMemo(() => {
    if (auctionState === AUCTION_STATE.NOT_STARTED) {
      return (
        <Text color="gray.500">
          Sale starts in{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {countdown} {handleMinutes(countdown)}
          </Text>{' '}
          at{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {Boolean(config?.startTime) && ethers.utils.formatUnits(config?.startAmountInWei!, 18)} ETH
          </Text>
        </Text>
      )
    }

    if (auctionState === AUCTION_STATE.STARTED) {
      return (
        <Text color="gray.500">
          Sale ends in{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {countdown} {handleMinutes(countdown)}
          </Text>{' '}
          at{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {Boolean(config?.endAmountInWei) && ethers.utils.formatUnits(config?.endAmountInWei!, 18)} ETH
          </Text>
        </Text>
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
            {rebate} {handleMinutes(countdown)}
          </Text>
        </Text>
      )
    }

    return null
  }, [countdown, auctionState, config?.startTime, config?.startAmountInWei, config?.endAmountInWei, config?.endTime, config?.refundDelayTime])

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
          <Box flex={1}>
            <Text color="gray.400" mb={2}>
              NFTs minted
            </Text>
            <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
              {[AUCTION_STATE.STARTED, AUCTION_STATE.NOT_STARTED].includes(auctionState) && `${currentSupply}/${maxSupply}`}
              {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT, AUCTION_STATE.REBATE_STARTED].includes(auctionState) && `${currentSupply}`}
            </Text>
          </Box>
          <Box flex={1}>
            <Text color="gray.400" mb={2}>
              {auctionState === AUCTION_STATE.NOT_STARTED && 'Initial price'}
              {auctionState === AUCTION_STATE.STARTED && 'Current price'}
              {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT].includes(auctionState) && 'Final price'}
              {auctionState === AUCTION_STATE.REBATE_STARTED && 'Mint price'}
            </Text>
            <Text fontSize={['1.8rem']} color="gray.100" fontWeight="bold">
              {[AUCTION_STATE.NOT_STARTED, AUCTION_STATE.STARTED].includes(auctionState) && currentPrice}
              {[AUCTION_STATE.ENDED, AUCTION_STATE.SOLD_OUT, AUCTION_STATE.REBATE_STARTED].includes(auctionState) && lastPrice}
              {` ETH`}
            </Text>
          </Box>
        </Flex>
        {![AUCTION_STATE.NOT_STARTED, AUCTION_STATE.REBATE_STARTED].includes(auctionState) && renderButton}
      </CardBody>
    </Card>
  )
}

export default NftCard
