import React, { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'
import useMediaQuery from '@ui/hooks/use-media-query'
import Counter from '../../counter'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import { useMaschineContext } from '@ui/contexts/maschine'
import { useQueryClient } from 'react-query'
import BigNumber from 'bignumber.js'
import { formatEther } from 'ethers/lib/utils.js'
import useTxToast from '@ui/hooks/use-tx-toast'
import useClaimTokens from '@web3/contracts/dutch-auction/use-claim-tokens'
import { TransactionStatus } from 'types/transaction'
import theme from '@ui/base/theme'
import { formatBigNumberFloor, formatToEtherString, normalizeBigNumber } from 'utils/price'
import useGetClaimableTokens from '@web3/contracts/dutch-auction/use-get-claimable-tokens'

const ModalMint = ({ isOpen, onClose }: ModalProps) => {
  const queryClient = useQueryClient()
  const isMobile = useMediaQuery('(max-width: 479px)')
  const { showTxSentToast, showTxErrorToast, showTxExecutedToast } = useTxToast()
  const { claimableCount } = useGetClaimableTokens()

  const [quantity, setQuantity] = useState(1)

  const { address } = useMaschineContext()

  const { data: userData } = useGetUserData(address)
  const { currentPrice, priceEther } = useGetCurrentPrice()
  const { mutateAsync: claimTokens, isLoading: isSubmitting } = useClaimTokens()

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['user-data'] })
  }, [queryClient])

  const contribution = useMemo(() => BigNumber(formatEther(userData?.contribution ?? 0)), [userData])

  const tokensBidded = useMemo(() => userData?.tokensBidded ?? 0, [userData?.tokensBidded])
  const pendingRebate = useMemo(() => {
    const contributionBN = normalizeBigNumber(userData?.contribution)
    const finalPrice = BigNumber(priceEther).multipliedBy(tokensBidded)
    const pendingBN = contributionBN.minus(finalPrice).toString()

    return formatBigNumberFloor(formatToEtherString(pendingBN))
  }, [priceEther, tokensBidded, userData?.contribution])

  useEffect(() => {
    if (!claimableCount) {
      setQuantity(0)
    } else {
      setQuantity(1)
    }
  }, [claimableCount])

  const handleAction = (action: 'increase' | 'decrease') => setQuantity((prev) => (action === 'increase' ? prev + 1 : prev - 1))

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = Number(e.currentTarget.value)

    if (value >= claimableCount) {
      return setQuantity(claimableCount)
    }

    setQuantity(value || 0)
  }

  const handleSubmit = useCallback(async () => {
    try {
      if (!quantity) {
        return alert('Invalid quantity')
      }

      if (!address) {
        throw new Error('Wallet is not connected')
      }

      const response = await claimTokens(quantity)

      showTxSentToast('claim-tokens', response?.hash)

      onClose()

      const wait = await response?.wait()

      if (wait?.status === TransactionStatus.Success) {
        showTxExecutedToast({
          title: `Minted ${quantity} NFTs`, // TODO: add correct message
          txHash: wait?.transactionHash,
          id: 'claim-tokens-success',
        })

        queryClient.invalidateQueries(['currentSupply'])
        queryClient.invalidateQueries(['claimable-tokens'])
        queryClient.invalidateQueries(['user-data'])
      }
    } catch (error: any) {
      console.log('handleSubmit', error)
      showTxErrorToast(error)
    }
  }, [quantity, address, showTxErrorToast, showTxSentToast, claimTokens, onClose, showTxExecutedToast, queryClient])

  return (
    <Modal
      isCentered={true}
      isOpen={isOpen}
      scrollBehavior={isMobile ? 'inside' : 'outside'}
      motionPreset={isMobile ? 'slideInBottom' : 'scale'}
      onClose={onClose}
    >
      <ModalOverlay height="100vh" />
      <ModalContent
        bg="white"
        position={['fixed', 'unset']}
        bottom={['0px', 'unset']}
        mb={['0', 'auto']}
        borderRadius={['1rem 1rem 0 0', '1rem']}
        maxW={['lg', '438px']}
        maxH={['full', 'unset']}
        px={4}
        py={6}
      >
        <ModalHeader position="relative" py="13px">
          <Text fontSize="lg" lineHeight={1} color="gray.900" textAlign="center">
            Mint NFT with rebate
          </Text>
          <CloseButton color="gray.500" onClick={onClose} position="absolute" right={0} top={0} w="44px" h="44px" size="lg" />
        </ModalHeader>
        <Box overflowY={['auto', 'unset']} my={10}>
          <Box mb={6}>
            <Text color="gray.500" mb={2}>
              Rebate balance:
            </Text>
            <Box borderColor="gray.100" borderWidth={1} borderRadius="8px" p={4}>
              <Box mb={8}>
                <Text color="gray.500" mb={1}>
                  You bought
                </Text>
                <Text color="gray.700" fontWeight="bold">
                  {tokensBidded} NFTs{' '}
                  <Text as="span" color="gray.500" fontWeight="normal">
                    per
                  </Text>{' '}
                  {formatBigNumberFloor(contribution)} ETH
                </Text>
              </Box>
              <Box mb={8}>
                <Text color="gray.500" mb={1}>
                  Current price is
                </Text>
                <Text color="gray.700" fontWeight="bold">
                  {currentPrice} ETH
                </Text>
              </Box>
              <Box>
                <Text color="gray.500" mb={1}>
                  Pending rebate
                </Text>
                <Text fontSize="2xl" color="gray.700" fontWeight="bold">
                  {pendingRebate} ETH
                </Text>
              </Box>
            </Box>
          </Box>
          <Text color="gray.500" mb={1}>
            Buy more with rebate
          </Text>
          <Text as="p" fontSize="sm" fontStyle="italic" color="gray.400" mb={6}>
            Up to{' '}
            <Text color="links.500" as="strong">
              {claimableCount}
            </Text>{' '}
            NFTS
          </Text>
          <Counter value={quantity} maxValue={claimableCount} onAction={handleAction} onChange={handleChange} />
        </Box>
        <Box>
          <Button
            isDisabled={isSubmitting || !quantity}
            isLoading={isSubmitting}
            variant="solid"
            size="lg"
            w="full"
            mb={6}
            _hover={{ '&:disabled': { opacity: 0.4, background: theme.colors.gray[900] } }}
            onClick={handleSubmit}
          >
            Mint now
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

export default ModalMint
