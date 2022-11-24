import Layout from '@components/global/layout'
import { Button, Flex, Text } from '@chakra-ui/react'
import { localize } from '@utils/lib/formatter'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ArticlesPage: NextPage = () => {
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <Layout title={localize(locale, 'article')} mt="3.75rem">
      <Flex
        justifyContent="center"
        alignItems="center"
        mt="10rem"
        flexDir="column"
      >
        <Text fontSize={20}>{localize(locale, 'underDev')}</Text>
        <Button onClick={() => router.replace('/')}>
          {localize(locale, 'goBack')}
        </Button>
      </Flex>
    </Layout>
  )
}

export default ArticlesPage
