import { extendTheme, ThemeConfig } from '@chakra-ui/react'
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

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme({
  breakpoints,
  config,
  colors,
  styles,
  fonts,
  components: {
    Container: {
      baseStyle: {
        maxWidth: {
          sm: '90%',
          md: '90%',
          lg: '90%',
          xl: '1160px',
          '2xl': '1280px',
        },
      },
    },
  },
})

export default theme
