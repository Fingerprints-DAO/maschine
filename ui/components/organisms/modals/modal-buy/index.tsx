import React, { ChangeEventHandler, useCallback, useMemo, useState } from 'react'
import { Box, Button, CloseButton, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { ModalProps } from '@ui/contexts/modal'
import Counter from '../../counter'
import useMediaQuery from '@ui/hooks/use-media-query'
import useGetCurrentPrice from '@web3/contracts/dutch-auction/use-get-current-price'
import { useMaschineContext } from '@ui/contexts/maschine'
import { BigNumber, ethers } from 'ethers'
import useGetUserData from '@web3/contracts/dutch-auction/use-get-user-data'
import useMint from '@web3/contracts/dutch-auction/use-mint'
import useBid from '@web3/contracts/dutch-auction/use-bid'
import { TransactionStatus } from 'types/transaction'
import useTxToast from '@ui/hooks/use-tx-toast'
import theme from '@ui/base/theme'

const ModalBuy = ({ isOpen, onClose }: ModalProps) => {
  const { address, config } = useMaschineContext()
  const isMobile = useMediaQuery('(max-width: 479px)')
  const { showTxErrorToast, showTxExecutedToast } = useTxToast()

  const [quantity, setQuantity] = useState(0)

  const { data: userData } = useGetUserData()
  const { data: currentPrice } = useGetCurrentPrice()
  const { mutateAsync: handleBid, isLoading: isSubmittingBid } = useBid()
  const { mutateAsync: handleMint, isLoading: isSubmittingMint } = useMint()

  const maxMintQuantity = useMemo(() => {
    if (!config?.limitInWei || !currentPrice || !userData?.contribution) {
      return 0
    }

    const limit = Number(ethers.utils.formatUnits(config.limitInWei))

    const qty = Math.floor((limit - userData.contribution.toNumber()) / Number(currentPrice))

    return qty
  }, [config?.limitInWei, currentPrice, userData?.contribution])

  const handleAction = (action: 'increase' | 'decrease') => setQuantity((prev) => (action === 'increase' ? prev + 1 : prev - 1))

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = Number(e.currentTarget.value)

    if (value >= maxMintQuantity) {
      return setQuantity(maxMintQuantity)
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

      const mint = await handleMint({ address, qty: quantity })

      if (!mint?.data) {
        throw new Error('')
      }

      const payload = {
        deadline: BigNumber.from(mint.data.deadline),
        qty: quantity,
        price: currentPrice ?? '0',
        signature: mint.data.signature,
      }

      const response = await handleBid(payload)

      const wait = await response?.wait()

      if (wait?.status === TransactionStatus.Success) {
        showTxExecutedToast({
          title: `Minted ${quantity} NFTs`,
          txHash: wait?.transactionHash,
          id: 'extend-stake',
        })

        window.location.reload()
      }
    } catch (error: any) {
      console.log('handleSubmit', error)
      showTxErrorToast(error)
    }
  }, [quantity, address, handleMint, currentPrice, handleBid, showTxExecutedToast, showTxErrorToast])

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
        px={4}
        py={6}
      >
        <ModalHeader position="relative" py="13px" mb={10}>
          <Text fontSize="lg" lineHeight={1} color="gray.900" textAlign="center">
            Buy NFTs now
          </Text>
          <CloseButton color="gray.500" onClick={onClose} position="absolute" right={0} top={0} w="44px" h="44px" size="lg" />
        </ModalHeader>
        <Box borderColor="gray.100" borderWidth={1} borderRadius="8px" p={4} mb={10}>
          <Text color="gray.500" mb={1}>
            Current price is
          </Text>
          <Text color="gray.700" fontWeight="bold">
            {currentPrice} ETH
          </Text>
        </Box>
        <Box mb={10}>
          <Text color="gray.500" mb={10}>
            How many NFTs do you want to mint? <br />
            <Text as="span" fontSize="sm" fontStyle="italic" color="gray.400">
              You can mint{' '}
              <Text color="links.500" as="strong">
                {maxMintQuantity}
              </Text>{' '}
              NFTS
            </Text>
          </Text>
          <Counter value={quantity} maxValue={maxMintQuantity} onAction={handleAction} onChange={handleChange} />
        </Box>
        <ModalFooter px={0} pt={0} display="block">
          <Button
            isDisabled={isSubmittingMint || isSubmittingBid}
            isLoading={isSubmittingMint || isSubmittingBid}
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalBuy
