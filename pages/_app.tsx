import '../styles/globals.css'
import 'nprogress/nprogress.css'

import { getBaseURL } from 'utils/_getLink'
import App, { AppContext, AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@ui/base/theme'
import MetaTags, { MetaTagsProps } from '@ui/components/molecules/metatags'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useScrollRestoration from '@ui/hooks/use-scroll-restoration'

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

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
