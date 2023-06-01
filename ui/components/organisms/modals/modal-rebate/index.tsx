import React, { useCallback, useEffect, useMemo } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import { useMaschineContext } from '@ui/contexts/maschine'
import { NumberSettings } from 'types/number-settings'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import { useQueryClient } from 'react-query'
import useClaimRefund from '@web3/contracts/dutch-auction/use-claim-refund'
import theme from '@ui/base/theme'
import { TransactionStatus } from 'types/transaction'
import useTxToast from '@ui/hooks/use-tx-toast'
import { formatBigNumberFloor, formatToEtherString, normalizeBigNumber } from 'utils/price'
import useGetLastPrice from '@web3/contracts/dutch-auction/use-get-last-price'

const ModalRebate = ({ isOpen, onClose }: ModalProps) => {
  const queryClient = useQueryClient()
  const { address, config } = useMaschineContext()
  const isMobile = useMediaQuery('(max-width: 479px)')
  const { showTxSentToast, showTxErrorToast, showTxExecutedToast } = useTxToast()
  const { lastPriceBN, lastPrice, lastPriceInWei } = useGetLastPrice()

  const { data: userData } = useGetUserData(address)
  const { mutateAsync: claimRefund, isLoading: isSubmitting } = useClaimRefund()

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['user-data'] })
  }, [queryClient])

  const contribution = useMemo(() => formatToEtherString(userData?.contribution), [userData])
  const pendingRebate = useMemo(() => {
    const contributionBN = normalizeBigNumber(userData?.contribution)
    const finalPrice = BigNumber(lastPriceInWei).multipliedBy(userData?.tokensBidded ?? '0')
    return formatEther(contributionBN.minus(finalPrice).toString())
  }, [lastPriceInWei, userData?.contribution, userData?.tokensBidded])

  console.log(pendingRebate?.toString())
  const handleSubmit = useCallback(async () => {
    try {
      if (!address) {
        throw new Error('Wallet is not connected')
      }

      const response = await claimRefund()

      showTxSentToast('claim-refund', response?.hash)

      onClose()

      const wait = await response?.wait()

      if (wait?.status === TransactionStatus.Success) {
        showTxExecutedToast({
          title: `Refund claimed`, // TODO: add correct message
          txHash: wait?.transactionHash,
          id: 'claim-refund-success',
        })
      }
      queryClient.invalidateQueries('user-data')
    } catch (error: any) {
      console.log('handleSubmit', error)
      showTxErrorToast(error)
    }
  }, [address, claimRefund, showTxSentToast, onClose, queryClient, showTxExecutedToast, showTxErrorToast])

  return (
    <Modal isCentered={true} isOpen={isOpen} scrollBehavior="inside" motionPreset={isMobile ? 'slideInBottom' : 'scale'} onClose={onClose}>
      <ModalOverlay height="100vh" />
      <ModalContent
        bg="white"
        position={['fixed', 'unset']}
        bottom={['0px', 'unset']}
        mb={['0', 'auto']}
        borderRadius={['1rem 1rem 0 0', '1rem']}
        maxW={['lg', '438px']}
        maxH="full"
        px={4}
        py={6}
      >
        <ModalHeader position="relative" py="13px" mb={10}>
          <Text fontSize="lg" lineHeight={1} color="gray.900" textAlign="center">
            Claim your rebate
          </Text>
          <CloseButton color="gray.500" onClick={onClose} position="absolute" right={0} top={0} w="44px" h="44px" size="lg" />
        </ModalHeader>
        <Box overflowY="auto" mb={10}>
          <Text color="gray.500" mb={2}>
            Check if you are eligible to claim a rebate from your Maschine NFT purchase:
          </Text>
          <Box borderColor="gray.100" borderWidth={1} borderRadius="8px" p={4}>
            <Box mb={8}>
              <Text color="gray.500" mb={1}>
                You bought
              </Text>
              <Text color="gray.700" fontWeight="bold">
                {userData?.tokensBidded ?? 0} NFTs{' '}
                <Text as="span" color="gray.500" fontWeight="normal">
                  per
                </Text>{' '}
                {contribution} ETH
              </Text>
            </Box>
            <Box mb={8}>
              <Text color="gray.500" mb={1}>
                Final price
              </Text>
              <Text color="gray.700" fontWeight="bold">
                {userData?.tokensBidded ?? 0} NFTs{' '}
                <Text as="span" color="gray.500" fontWeight="normal">
                  per
                </Text>{' '}
                {formatBigNumberFloor(lastPriceBN.multipliedBy(userData?.tokensBidded ?? 0))} ETH{' '}
                <Text as="span" color="gray.500" fontWeight="normal">
                  ({lastPrice} ETH each)
                </Text>
              </Text>
            </Box>
            <Box>
              <Text color="gray.500" mb={1}>
                Pending rebate
              </Text>
              <Text fontSize="2xl" color="gray.700" fontWeight="bold">
                {pendingRebate?.toString()} ETH
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            isDisabled={isSubmitting}
            isLoading={isSubmitting}
            variant="solid"
            size="lg"
            w="full"
            mb={6}
            _hover={{ '&:disabled': { opacity: 0.4, background: theme.colors.gray[900] } }}
            onClick={handleSubmit}
          >
            Claim amount
          </Button>
          <Text color="gray.500" fontSize="xs" textAlign="center">
            By clicking {`"Mint now"`} button you agree with our{' '}
            <Box as="a" href="#" color="links.500">
              terms of use
            </Box>
            .
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default ModalRebate
