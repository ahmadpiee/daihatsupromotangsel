import React from 'react'
import dynamic from 'next/dynamic'
import { GetServerSideProps, NextPage } from 'next'
import Layout from '@components/global/layout'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import { Container, Heading } from '@chakra-ui/react'
import { getLinks } from '@store/slice/links/linkSlice'
import { wrapper } from '@store/index'

const LinkTemplate = dynamic(
  () => import('@components/template/contact-page/LinktTemplate'),
  { ssr: false },
)

const Contact: NextPage = () => {
  const { locale } = useRouter()

  return (
    <Layout title={localize(locale, 'contact')} mt="6rem">
      <Container maxW="container.md">
        <Heading textAlign="center">{localize(locale, 'contact')}</Heading>
        <LinkTemplate />
      </Container>
    </Layout>
  )
}

export default Contact

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    await store.dispatch(getLinks())
    return {
      props: {},
    }
  })
