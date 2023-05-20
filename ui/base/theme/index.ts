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

const containerBaseStyle = {
  maxWidth: {
    base: '80%',
    sm: '90%',
    xl: '1160px',
    '2xl': '1280px',
  },
}

// export the component theme
export const containerTheme = defineStyleConfig({ baseStyle: containerBaseStyle })

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
          lineHeight: 1,
        }
      }),
    }),
    Container: containerTheme,
  },
})

export default theme
