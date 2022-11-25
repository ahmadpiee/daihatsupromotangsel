import React from 'react'
import Layout from '@components/global/layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Container } from '@chakra-ui/react'

const FirstSection = dynamic(
  () => import('@components/organisms/articles/list/sections/FirstSection'),
  { ssr: false },
)

const ArticleListTemplate: React.FC = () => {
  const { locale } = useRouter()

  return (
    <Layout title={localize(locale, 'article')} mt="5rem">
      <Container maxW="container.md">
        <FirstSection />
      </Container>
    </Layout>
  )
}

export default ArticleListTemplate
