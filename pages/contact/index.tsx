import { NextPage } from 'next'
import React from 'react'
import Layout from '@components/global/layout'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import { Text } from '@chakra-ui/react'

const Contact: NextPage = () => {
  const { locale } = useRouter()

  return (
    <Layout title={localize(locale, 'contact')}>
      <Text>{localize(locale, 'contact')}</Text>
    </Layout>
  )
}

export default Contact
