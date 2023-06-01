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
import Web3Provider from '@ui/contexts/web3'
import { MaschineProvider } from '@ui/contexts/maschine'
import { ModalProvider } from '@ui/contexts/modal'
import Modal from '@ui/components/organisms/modals'
import ReactQueryProvider from '@ui/contexts/react-query'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'

dayjs.extend(duration)

type MaschineProps = AppProps & {
  pageProps: {
    host: string
    meta: MetaTagsProps
  }
}

NProgress.configure({ showSpinner: false })

const toastOptions = {
  motionVariants: {
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  },
}

function Maschine({ Component, pageProps }: MaschineProps) {
  const router = useRouter()

  useScrollRestoration(router)

  return (
    <ReactQueryProvider>
      <Web3Provider>
        <ChakraProvider theme={theme} toastOptions={toastOptions}>
          <MaschineProvider>
            <ModalProvider>
              <MetaTags {...pageProps.meta} host={pageProps.host} />
              <Transition>
                <Component {...pageProps} cookieBanner={<CookieBanner />} />
                {(!pageProps?.meta?.navPage || !pageProps.meta.navPage.includes('home')) && <CookieBanner isInternalPage />}
                <Modal />
              </Transition>
            </ModalProvider>
          </MaschineProvider>
        </ChakraProvider>
      </Web3Provider>
    </ReactQueryProvider>
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
