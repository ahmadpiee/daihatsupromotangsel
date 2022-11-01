import React from 'react'
import Layout from '@components/global/Layout'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import { Text } from '@chakra-ui/react'

const Home = () => {
  const { locale } = useRouter()
  return (
    <Layout title={localize(locale, 'home')}>
      <Text>Home</Text>
    </Layout>
  )
}

export default Home
