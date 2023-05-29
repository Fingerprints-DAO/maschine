import '../styles/globals.css'

import App, { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import MetaTags, { MetaTagsProps } from '@ui/components/molecules/metatags'
import theme from '@ui/base/theme'
import useScrollRestoration from '@ui/hooks/use-scroll-restoration'
import Transition from '@ui/components/molecules/transition'
import CookieBanner from '@ui/components/organisms/cookie-banner'
import { getBaseURL } from 'utils/_getLink'

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
    <ChakraProvider theme={theme}>
      <MetaTags {...pageProps.meta} host={pageProps.host} />
      <Transition>
        <Component {...pageProps} cookieBanner={<CookieBanner />} />
        {(!pageProps?.meta?.navPage || !pageProps.meta.navPage.includes('home')) && <CookieBanner isInternalPage />}
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
