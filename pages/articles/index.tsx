import { wrapper } from '@store/index'
import { getArticles } from '@store/slice/articles/articleSlice'
import PrivateRoute from '@utils/helpers/hoc/PrivateRoute'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'

const ArticleListTemplate = dynamic(
  () => import('@components/template/articles/list'),
  { ssr: false },
)

const ArticlesPage: NextPage = () => {
  return (
    <PrivateRoute allowedRoles={['public']} component={ArticleListTemplate} />
  )
}

export default ArticlesPage

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    await store.dispatch(getArticles())
    return {
      props: {
        initialState: store.getState(),
      },
    }
  })
