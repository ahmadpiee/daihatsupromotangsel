import { Flex, Heading } from '@chakra-ui/react'
import AppButton from '@components/atoms/buttons/AppButton'
import Layout from '@components/global/layout'
import { localize } from '@utils/lib/formatter'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const UnAuthorizedPage: NextPage = () => {
  const { locale } = useRouter()
  const router = useRouter()

  return (
    <Layout title="unauthorized" mt={{ base: '7rem' }}>
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Heading>you are unauthorized!</Heading>
        <AppButton onClick={() => router.replace('/')}>
          {localize(locale, 'goBack')}
        </AppButton>
      </Flex>
    </Layout>
  )
}

export default UnAuthorizedPage
