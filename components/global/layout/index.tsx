import React from 'react'
import Head from 'next/head'
import { Container, ContainerProps } from '@chakra-ui/react'

interface LayoutProps extends ContainerProps {
  children?: any
  title?: string
  description?: string
  keywords?: string
}

const Layout: React.FC<LayoutProps> = props => {
  const { children, title, description, keywords } = props
  return (
    <>
      <Head>
        <title>
          {title + ' - ' + 'Official Website Daihatsu Promo Tangsel'}
        </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Container maxW="full" p={0} {...props}>
        {children}
      </Container>
    </>
  )
}

export default Layout

Layout.defaultProps = {
  description: 'daihatsu, promo, tangsel, promo daihatsu, daihatsu tangsel',
  keywords: 'daihatsu, promo, tangsel, promo daihatsu, daihatsu tangsel',
}
