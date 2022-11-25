import { wrapper } from '@store/index'
import { getArticleById } from '@store/slice/articleSlice'
import { GetServerSideProps, NextPage } from 'next'
import UnderDevelopment from '@components/molecules/statements/UnderDevelopment'

const ArticleDetailsPage: NextPage = () => {
  return (
    <>
      <UnderDevelopment />
    </>
  )
}

export default ArticleDetailsPage

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ({ query: { id } }) => {
    await store.dispatch(getArticleById(id))
    return {
      props: {},
    }
  })
