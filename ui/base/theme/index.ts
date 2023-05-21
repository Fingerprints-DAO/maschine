import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import fonts from './fonts'
import styles from './styles'
import components from './components'

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const colors = {
  primary: {
    50: '#FFFFFF33',
    500: '#FFF',
  },
  secondary: {
    500: '#F76B8B',
  },
  links: {
    500: '#6ECCDD',
  },
}

const theme = extendTheme({
  config,
  colors,
  styles,
  fonts,
  components,
})

export default theme
