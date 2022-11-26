import React from 'react'
import dynamic from 'next/dynamic'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { Divider, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectArticles } from '@store/index'
import LoadingCircle from '@components/atoms/progress-indicators/LoadingCircle'

const ArticleCard = dynamic(
  () => import('@components/molecules/cards/ArticleCard'),
  { ssr: false },
)
const RoutePageDirection = dynamic(
  () => import('@components/molecules/route-pages/index'),
  { ssr: false },
)

const FirstSection: React.FC = () => {
  const { locale } = useRouter()
  const { articles, isLoading, error } = useSelector(selectArticles)

  return (
    <>
      <RoutePageDirection
        pagename={localize(locale, 'article')}
        endpoint="/articles"
      />
      <Divider m={{ base: '0.25rem 0 1rem 0' }} />
      {error && (
        <Text variant="h5" color="red">
          {error}
        </Text>
      )}
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          {articles.map((val: any, i: any) => {
            return (
              <ArticleCard
                key={i}
                id={val?.id}
                src={val?.attributes?.thumbnail?.data?.attributes?.url}
                title={val?.attributes?.title}
                description={val?.attributes?.description}
                author={val?.attributes?.author}
                publishdate={val?.attributes?.publish}
                mb={{ base: '1rem' }}
              />
            )
          })}
        </>
      )}
    </>
  )
}

export default FirstSection
