import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/react'

const Container = (props: ContainerProps) => <ChakraContainer {...props} />

Container.defaultProps = {
  px: [4, 4, 6, 6, 4],
  maxW: ['full', 'full', 'full', 'full', '1280px'],
}

export default Container
