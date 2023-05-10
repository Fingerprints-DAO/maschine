import '../styles/globals.css'

import { getBaseURL } from 'utils/_getLink'
import App, { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@ui/base/theme'
import MetaTags, { MetaTagsProps } from '@ui/components/molecules/metatags'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import useScrollRestoration from '@ui/hooks/use-scroll-restoration'
import Transition from '@ui/components/molecules/transition'

type MaschineProps = AppProps & {
  pageProps: {
    host: string
    meta: MetaTagsProps
  }
}

function Maschine({ Component, pageProps }: MaschineProps) {
  const router = useRouter()

  useScrollRestoration(router)

  return (
    <ChakraProvider theme={theme}>
      <MetaTags {...pageProps.meta} host={pageProps.host} />
      <Transition>
        <Component {...pageProps} />
      </Transition>
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
