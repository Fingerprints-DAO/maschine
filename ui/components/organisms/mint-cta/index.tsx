import { Box, Button, Flex, Link, Text, Tooltip, theme } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ModalElement, useModalContext } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import { useEffect, useMemo, useState } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { formatBigNumberFloor, normalizeBigNumber } from 'utils/price'
import Counter from '../counter'
import { useMaschineContext } from '@ui/contexts/maschine'
import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import useGetLastPrice from '@web3/contracts/dutch-auction/use-get-last-price'

type MintCtaProps = {
  claimableCount: number
}

const MintCta = ({ claimableCount }: MintCtaProps) => {
  const isMobile = useMediaQuery('(max-width: 479px)')
  const { handleOpenModal } = useModalContext()
  const isElegible = useMemo(() => claimableCount > 0, [claimableCount])

  const { address } = useMaschineContext()
  const { data: userData } = useGetUserData(address)
  const { currentPrice, priceEther } = useGetCurrentPrice()
  const contribution = useMemo(() => BigNumber(formatEther(userData?.contribution ?? 0)), [userData])

  const tokensBidded = useMemo(() => userData?.tokensBidded ?? 0, [userData?.tokensBidded])
  const pendingRebate = useMemo(() => {
    const contributionBN = normalizeBigNumber(userData?.contribution)
    const finalPrice = BigNumber(priceEther).multipliedBy(tokensBidded)
    return formatEther(contributionBN.minus(finalPrice).toString())
  }, [priceEther, tokensBidded, userData?.contribution])

  return (
    <>
      {tokensBidded > 0 && (
        <Box mb={6}>
          <Box borderColor="gray.100" borderWidth={2} borderRadius="8px">
            <Box py={3} display={'flex'} flexWrap={'wrap'}>
              <Box px={6} py={3} w={['100%', '100%', '50%', '30%']} display={'inline-block'}>
                <Text color="gray.400" mb={1} fontWeight={'bold'}>
                  You bought
                </Text>
                <Text color="gray.500">
                  {tokensBidded} NFTs{' '}
                  <Text as="span" color="gray.500" fontWeight="normal">
                    per
                  </Text>{' '}
                  {formatBigNumberFloor(contribution)} ETH
                </Text>
              </Box>
              <Box px={6} py={3} w={['100%', '100%', '50%', '20%']} display={'inline-block'}>
                <Text color="gray.400" mb={1} fontWeight={'bold'}>
                  Current price is
                </Text>
                <Text color="gray.500">{currentPrice} ETH</Text>
              </Box>
              <Box px={6} py={3} w={['100%', '100%', '50%', '25%']} display={'inline-block'}>
                <Text color="gray.400" mb={1} fontWeight={'bold'}>
                  Pending rebate
                </Text>
                <Text color="gray.500">{Number(pendingRebate) > 0 ? pendingRebate : 0} ETH</Text>
              </Box>
              <Box px={6} py={3} w={['100%', '100%', '50%', '25%']} display={'inline-block'}>
                <Text color="gray.400" mb={1} fontWeight={'bold'}>
                  Buy more with rebate
                </Text>
                <Text as="p" fontSize="sm" color="gray.500">
                  Up to {claimableCount < 1 ? 0 : claimableCount} NFTS
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box borderWidth={2} borderColor="gray.100" p={6} mb={{ base: 10 }} borderRadius="8px">
        <Box as={isMobile ? 'div' : Flex} alignItems={!isMobile ? 'center' : undefined}>
          <Box flex={1}>
            <Text color="gray.300" fontSize="2xl" fontWeight="bold" lineHeight="27.6px" mb={2}>
              Mint more NFTs with your pending rebate
            </Text>
            <Text color="gray.500" mb={isMobile ? 8 : undefined}>
              You don&apos;t have to commit any more ETH to do this. Check out our{' '}
              <Link
                as={NextLink}
                href="/faq"
                color="links.500"
                _hover={{ color: 'white' }}
                transition="ease"
                transitionProperty="color"
                transitionDuration="0.2s"
              >
                FAQ
              </Link>
              .
            </Text>
          </Box>
          {isElegible && (
            <Button
              variant="white"
              w={isMobile ? 'full' : undefined}
              size="lg"
              ml={isMobile ? undefined : 8}
              onClick={handleOpenModal(ModalElement.Mint)}
            >
              Mint new NFT
            </Button>
          )}
          {!isElegible && (
            <Tooltip
              label={"You haven't purchased an NFT or the price drop is too low."}
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
                isDisabled
                w={isMobile ? 'full' : undefined}
                size="lg"
                ml={isMobile ? undefined : 8}
                onClick={handleOpenModal(ModalElement.Mint)}
                _hover={{ '&:disabled': { background: theme.colors.whiteAlpha } }}
                color="gray.500"
                cursor="no-drop"
                borderColor="gray.500"
                leftIcon={<HiOutlineLockClosed />}
                variant="outline"
              >
                Unavailable
              </Button>
            </Tooltip>
          )}
        </Box>
      </Box>
    </>
  )
}

export default MintCta
