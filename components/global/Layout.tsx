import React from 'react'
import Head from 'next/head'
import { pageAnimation } from '@components/atoms/animations/index'
import { motion } from 'framer-motion'
import { Box, BoxProps, Container } from '@chakra-ui/react'

interface LayoutProps extends BoxProps {
  children?: any
  className?: string
  title?: string
  description?: string
  keywords?: string
}

const Layout: React.FC<LayoutProps> = props => {
  const { children, title, description, keywords } = props
  return (
    <Box {...props} as="main">
      <Head>
        <title>{title + ' ' + 'official website daihatsupromotangsel'}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Container maxW="container.lg" pt={{ base: 14 }}>
          {children}
        </Container>
      </motion.div>
    </Box>
  )
}

export default Layout

Layout.defaultProps = {
  title: `daihatsupromotangsel.com`,
  description: 'daihatsu, promo, tangsel, promo daihatsu, daihatsu tangsel',
  keywords: 'daihatsu, promo, tangsel, promo daihatsu, daihatsu tangsel',
}
