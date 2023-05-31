import { CheckIcon, WarningIcon } from '@chakra-ui/icons'
import { As, CloseButton, Flex, Icon, Text, ToastId, UseToastOptions, useToast } from '@chakra-ui/react'
import { TxMessage } from '@ui/components/atoms/tx-message'

type ToastContentProps = {
  title: string
  status: 'success' | 'error'
  txHash?: string
  toastId: ToastId
  icon?: {
    as: As
    color: any
  }
  description?: string
  onClose: (toastId: ToastId) => void
}

const ToastContent = ({ title, description, txHash, status, toastId, icon, onClose }: ToastContentProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg={status === 'success' ? 'gray.300' : '#F76B8B'}
      p={['84px 16px 72px', 4]}
      position="relative"
    >
      {Boolean(icon) && <Icon {...icon} mr={2} />}
      <Text color="gray.900" fontSize="lg" fontWeight="bold">
        {title}
        {description || (
          <>
            {Boolean(txHash) && ', click to '}
            {Boolean(txHash) && <TxMessage hash={txHash} />}
          </>
        )}
      </Text>
      <CloseButton color="gray.900" position="absolute" right="7px" top="7px" w="44px" h="44px" size="lg" onClick={() => onClose(toastId)} />
    </Flex>
  )
}

export const useTxToast = () => {
  const toast = useToast()

  const showTxSentToast = (toastId: ToastId, txHash?: string) => {
    toast({
      id: toastId,
      isClosable: true,
      containerStyle: {
        width: '100%',
        maxW: 'unset',
        m: 0,
        mt: 1,
      },
      duration: 9000,
      render: () => <ToastContent title="Transaction sent" txHash={txHash} status="success" toastId={toastId} onClose={toast.close} />,
    })
  }

  const showTxExecutedToast = ({
    title = 'Transaction executed',
    txHash,
    ...toastOptions
  }: UseToastOptions & { title?: string; txHash?: string }) => {
    if (toastOptions.id && toast.isActive(toastOptions.id)) {
      return
    }

    toast({
      ...toastOptions,
      isClosable: true,
      containerStyle: {
        width: '100%',
        maxW: 'unset',
        m: 0,
        mt: 1,
      },
      duration: 9000,
      render: () => (
        <ToastContent
          title={title}
          txHash={txHash}
          status="success"
          icon={{ as: CheckIcon, color: 'gray.900' }}
          toastId={toastOptions.id!}
          onClose={toast.close}
        />
      ),
    })
  }

  const showTxErrorToast = (error: Error) => {
    const revertError = error as any

    const toastConfig = (id: ToastId): UseToastOptions => ({
      title: `An error occured: `,
      status: 'error',
      id,
      containerStyle: {
        width: '100%',
        maxW: 'unset',
        m: 0,
        mt: 1,
      },
    })

    if (revertError.errorName) {
      const id = 'error-name'

      if (toast.isActive(id)) {
        return
      }

      toast({
        ...toastConfig(id),
        render: () => (
          <ToastContent
            title="An error occured: "
            description={`Error reverted ${revertError.errorName}`}
            status="error"
            icon={{ as: WarningIcon, color: 'gray.900' }}
            toastId={id}
            onClose={toast.close}
          />
        ),
      })

      return
    }

    if (revertError.code === 'ACTION_REJECTED') {
      const id = 'user-rejected'

      if (toast.isActive(id)) {
        return
      }

      toast({
        ...toastConfig(id),
        render: () => (
          <ToastContent
            title="An error occured: "
            description="user rejected metamask tx"
            status="error"
            icon={{ as: WarningIcon, color: 'gray.900' }}
            toastId={id}
            onClose={toast.close}
          />
        ),
      })

      return
    }

    const id = 'error'

    if (toast.isActive(id)) {
      return
    }

    toast({
      ...toastConfig(id),
      render: () => (
        <ToastContent
          title="An error occured: "
          description={revertError.reason ?? revertError.cause ?? revertError.message}
          status="error"
          icon={{ as: WarningIcon, color: 'gray.900' }}
          toastId={id}
          onClose={toast.close}
        />
      ),
    })
  }

  return {
    showTxSentToast,
    showTxErrorToast,
    showTxExecutedToast,
  }
}

export default useTxToast