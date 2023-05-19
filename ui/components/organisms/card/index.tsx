import { CardProps, Card as ChakraCard } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const Card = ({ children, ...props }: PropsWithChildren<CardProps>) => {
  return <ChakraCard {...props}>{children}</ChakraCard>
}

Card.defaultProps = {
  bg: 'gray.900',
}

export default Card
