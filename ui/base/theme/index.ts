import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import styles from './styles'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  primary: {
    50: '#FFFFFF33',
    500: '#FFF',
  },
}

const theme = extendTheme({
  config,
  semanticTokens: {},
  colors,
  styles,
})

export default theme
