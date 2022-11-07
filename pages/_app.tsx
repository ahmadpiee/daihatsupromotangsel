import '@fontsource/poppins'

//
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { isNotDevelopment } from '@utils/helpers/process-env'
import theme from '@components/global/Theme'
import useLoading from '@hooks/useLoading'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@store/index'
import { Provider } from 'react-redux'

const Header = dynamic(() => import('@components/global/header/index'), {
  ssr: false,
})

const ScrollToTop = dynamic(
  () => import('@components/atoms/scroll-to-top/index'),
  { ssr: false },
)

const Footer = dynamic(() => import('@components/global/footer/index'), {
  ssr: false,
})

const ProgressIndetermine = dynamic(
  () => import('@components/atoms/progress-indicators/ProgressIndetermine'),
  { ssr: false },
)

const Chat = dynamic(() => import('@components/global/chat'), { ssr: false })

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {})
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  const { loading } = useLoading()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Header />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </Head>
          <div style={{ overflow: 'hidden', minHeight: '90vh' }}>
            <AnimatePresence>
              {loading ? (
                <ProgressIndetermine />
              ) : (
                <Component
                  {...pageProps}
                  key={router.route && DisableConsole()}
                />
              )}
            </AnimatePresence>
            <ScrollToTop />
          </div>
          <Chat />
          <Footer />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
