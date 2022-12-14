import { wrapper } from '@store/index'
import { getArticleById } from '@store/slice/articles/articleByIdSlice'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import PrivateRoute from '@utils/helpers/hoc/PrivateRoute'

const ArticleDetailsTemplate = dynamic(
  () => import('@components/template/articles/details/index'),
  { ssr: false },
)

const ArticleDetailsPage: NextPage = () => {
  return (
    <PrivateRoute
      component={ArticleDetailsTemplate}
      allowedRoles={['public', 'admin']}
    />
  )
}

export default ArticleDetailsPage

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    await store.dispatch(getArticleById(ctx.query.id))
    return {
      props: {},
    }
  })
