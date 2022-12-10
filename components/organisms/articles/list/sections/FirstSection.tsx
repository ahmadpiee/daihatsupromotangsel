import React from 'react'
import dynamic from 'next/dynamic'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import {
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import {
  selectArticles,
  selectFilteredArticle,
  selectSearchArticle,
  useAppDispatch,
  useAppSelector,
} from '@store/index'
import LoadingCircle from '@components/atoms/progress-indicators/LoadingCircle'
import { setSearch } from '@store/slice/articles/articleSlice'
import { SearchIcon } from '@components/atoms/icons'
import { colors } from '@components/global/Theme'

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
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector(selectArticles)
  const articles = useAppSelector(selectFilteredArticle)
  const search = useAppSelector(selectSearchArticle)

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
      <InputGroup m={{ base: '2rem 0' }}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          borderColor={colors.twitter}
          placeholder={localize(locale, 'searchArticle')}
          _placeholder={{ color: colors.twitter }}
          value={search}
          onChange={e => {
            dispatch(setSearch(e.target.value))
          }}
        />
      </InputGroup>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          {articles.slice(0, 20).map((val: any, i: any) => {
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
