import { AspectRatio, Box, Button, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react'
import Card from '../card'
import Image from 'next/image'
import Wallet from '@ui/components/molecules/wallet'
import { useMaschineContext } from '@ui/contexts/maschine'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import { useIsBrowser } from '@ui/hooks/use-is-browser'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { useMemo } from 'react'
import { BigNumber, ethers } from 'ethers'
import dayjs from 'dayjs'
import { formatTime } from 'utils/date'
import CountdownTimer from '@ui/components/atoms/timer'

type NftCardProps = {
  cardImageNumber: string
}

const now = dayjs()

const NftCard = ({ cardImageNumber }: NftCardProps) => {
  const isBrowser = useIsBrowser()
  const { handleOpenModal } = useModalContext()
  const { isConnected, canInteract, config } = useMaschineContext()

  const isAuctionOpen = useMemo(() => {
    const startTimeUnix = config?.startTime?.toNumber()
    const start = dayjs.unix(startTimeUnix!)

    return now.isAfter(start)
  }, [config?.startTime])

  const timeToGo = useMemo(() => {
    const end = config?.endTime?.toNumber()

    if (!end) {
      return
    }

    const endDate = dayjs.unix(end)

    return endDate

    // const diff = endDate.diff(now, 'seconds')

    // return formatTime(diff)
  }, [config])

  const renderButton = useMemo(() => {
    if (!isBrowser) {
      return <div />
    }

    if (!isConnected) {
      return <Wallet variant="card" />
    }

    if (!canInteract) {
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
        >
          Mint unavailable
        </Button>
      )
    }

    if (isAuctionOpen) {
      return (
        <Button variant="white" size="lg" w="full" onClick={handleOpenModal(ModalElement.Buy)}>
          Buy
        </Button>
      )
    }

    return (
      <Button color="gray.500" cursor="no-drop" borderColor="gray.500" variant="outline" disabled={true} h={16} w="full" size="lg">
        Sold out
      </Button>
    )
  }, [isConnected, isBrowser, isAuctionOpen, canInteract, handleOpenModal])

  return (
    <Card mb={[10, 10, 10, 0]} boxShadow="md" w={['full', 'full', 'full', '432px']} mr={[0, 0, 0, 8]}>
      <CountdownTimer endDate={timeToGo} />
      <CardHeader p={6} pb={2}>
        <Text color="gray.500">
          Sale ends in{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {'timeToGo'}
          </Text>{' '}
          at{' '}
          <Text color="gray.300" as="span" fontWeight="bold">
            {Boolean(config?.endAmountInWei) && ethers.utils.formatUnits(config?.endAmountInWei!, 18)} ETH
          </Text>
        </Text>
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
        {renderButton}
      </CardBody>
    </Card>
  )
}

export default NftCard
