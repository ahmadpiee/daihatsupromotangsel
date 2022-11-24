import React from 'react'
import dynamic from 'next/dynamic'
import { wrapper } from '@store/index'
import { GetServerSideProps } from 'next'
import { getProducts } from '@store/slice/productSlice'
import { getBanners } from '@store/slice/bannerSlice'

const LandingPage = dynamic(
  () => import('@components/template/landing-page/LandingPage'),
)

const Home = () => {
  return (
    <>
      <LandingPage />
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    await store.dispatch(getBanners())
    await store.dispatch(getProducts())
    return {
      props: {},
    }
  })
