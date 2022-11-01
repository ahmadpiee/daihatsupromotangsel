import '@fontsource/lato'

import type { AppProps } from 'next/app'
//
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { isNotDevelopment } from '@utils/helpers/process-env'
import theme from '@components/global/Theme'

const DisableConsole = () => {
  if (isNotDevelopment) {
    return (console.log = function () {})
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Header /> */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <div style={{ overflow: 'hidden', minHeight: '100vh' }}>
          {/* <AnimatePresence mode="wait"> */}
          <Component {...pageProps} key={router.route && DisableConsole()} />
          {/* </AnimatePresence> */}
          {/* <ScrollToTop /> */}
        </div>
        {/* <Chat /> */}
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  )
}
