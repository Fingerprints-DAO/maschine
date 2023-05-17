import { defineStyleConfig, extendTheme, ThemeConfig } from '@chakra-ui/react'
import fonts from './fonts'
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
  secondary: {
    500: '#F76B8B',
  },
}

const baseStyle = {
  maxWidth: {
    base: '80%',
    sm: '90%',
    xl: '1160px',
    '2xl': '1280px',
  },
}

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle })

const theme = extendTheme({
  config,
  colors,
  styles,
  fonts,
  components: {
    Container: containerTheme,
  },
})

export default theme
