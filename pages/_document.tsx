import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Theme from '@components/global/Theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="id">
        <Head />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-72x72.png" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/tv-masa-kini/image/upload/v1662653858/icon-512x512_fhlbzf.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="muti.asof.dev logo" />
        <meta
          property="og:description"
          content="My Personal Website for me and her"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="apple-mobile-web-app-status-bar" content="#FFFFFF" />
        <meta name="twitter:url" content="https://daihatsupromotangsel.com" />
        <meta name="twitter:card" content="daihatsupromotangsel.com" />
        <meta name="twitter:title" content="Engagement Website" />
        <meta
          name="twitter:description"
          content="My Personal Website for me and her made by love"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/tv-masa-kini/image/upload/v1662653858/icon-512x512_fhlbzf.png"
        />
        <meta name="twitter:creator" content="@ahmadpiee" />
        <body>
          <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
