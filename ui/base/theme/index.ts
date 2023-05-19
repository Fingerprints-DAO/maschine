import { defineStyle, defineStyleConfig, extendTheme, ThemeConfig } from '@chakra-ui/react'
import fonts from './fonts'
import styles from './styles'

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
  components: {
    Button: defineStyleConfig({
      baseStyle: defineStyle((props) => {
        return {
          bg: `${props.colorScheme}.900`,
          background: `${props.colorScheme}.900`,
        }
      }),
    }),
    Container: {
      baseStyle: {
        maxWidth: {
          sm: '100%',
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
