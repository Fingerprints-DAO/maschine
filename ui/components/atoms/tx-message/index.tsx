import { Box } from '@chakra-ui/react'

type TxMessageProps = {
  hash?: string
}
export const TxMessage = ({ hash }: TxMessageProps) => {
  if (!hash) {
    return null
  }

  return (
    <Box
      as="a"
      href={`${process.env.NEXT_PUBLIC_ETHERSCAN_URL}/tx/${hash}`}
      target="_blank"
      color="gray.900"
      fontSize="lg"
      fontWeight="bold"
      textDecoration="underline"
    >
      view in Etherscan.
    </Box>
  )
}
