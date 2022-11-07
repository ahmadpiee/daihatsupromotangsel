import { NextPage } from 'next'
import React from 'react'
import Layout from '@components/global/layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { Text } from '@chakra-ui/react'

const Gallery: NextPage = () => {
  const { locale } = useRouter()
  return (
    <Layout title={localize(locale, 'gallery')}>
      <Text>{localize(locale, 'gallery')}</Text>
    </Layout>
  )
}

export default Gallery
