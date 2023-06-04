import { Box, Link, Text, ToastId } from '@chakra-ui/react'

type TxMessageProps = {
  hash?: string
  toastId?: ToastId
}
export const TxMessage = ({ hash, toastId }: TxMessageProps) => {
  if (!hash) {
    return null
  }

  return (
    <Box as="span">
      <Link
        href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}/tx/${hash}`}
        target="_blank"
        color="gray.900"
        fontSize="lg"
        fontWeight="bold"
        textDecoration="underline"
      >
        view in Etherscan
      </Link>
      {(toastId === 'mint-success' || toastId === 'claim-tokens-success') && (
        <>
          <Text as={'span'}> or see </Text>
          <Link
            as="a"
            href={`${process.env.NEXT_PUBLIC_OPENSEA_URL}${process.env.NEXT_PUBLIC_MASCHINE_CONTRACT_ADDRESS}`}
            target="_blank"
            color="gray.900"
            fontSize="lg"
            fontWeight="bold"
            textDecoration="underline"
          >
            the collection on Opensea.
          </Link>
        </>
      )}
    </Box>
  )
}
