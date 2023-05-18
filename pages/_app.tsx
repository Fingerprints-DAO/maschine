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
import Web3Provider from '@ui/contexts/web3'
import { MaschineProvider } from '@ui/contexts/maschine'

type MaschineProps = AppProps & {
  pageProps: {
    host: string
    meta: MetaTagsProps
  }
}

NProgress.configure({ showSpinner: false })

function Maschine({ Component, pageProps }: MaschineProps) {
  const router = useRouter()

  useScrollRestoration(router)

  return (
    <Web3Provider>
      <ChakraProvider theme={theme}>
        <MaschineProvider>
          <MetaTags {...pageProps.meta} host={pageProps.host} />
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </MaschineProvider>
      </ChakraProvider>
    </Web3Provider>
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
