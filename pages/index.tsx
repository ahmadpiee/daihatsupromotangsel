import React from 'react'
import Layout from '@components/global/layout'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import dynamic from 'next/dynamic'
import { wrapper } from '@store/index'
import { GetServerSideProps } from 'next'
import { getLinks } from '@store/slice/linkSlice'

const LandingPage = dynamic(() => import('@components/template/LandingPage'))

const Home = () => {
  const { locale } = useRouter()

  return (
    <Layout title={localize(locale, 'home')}>
      <LandingPage />
    </Layout>
  )
}

export default Home

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async () => {
//     await store.dispatch(getLinks())
//     return {
//       props: {},
//     }
//   })
