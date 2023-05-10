import '../styles/globals.css'
import { getBaseURL } from 'utils/_getLink'
import App, { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@ui/base/theme'
import MetaTags, { MetaTagsProps } from '@ui/components/molecules/metatags'

type MaschineProps = AppProps & {
  pageProps: {
    host: string
    meta: MetaTagsProps
  }
}

function Maschine({ Component, pageProps }: MaschineProps) {
  return (
    <ChakraProvider theme={theme}>
      <MetaTags {...pageProps.meta} host={pageProps.host} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

Maschine.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    pageProps: {
      ...appProps.pageProps,
      host: getBaseURL(),
    },
  }
}

export default Maschine
