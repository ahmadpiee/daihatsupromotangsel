import React from 'react'
import dynamic from 'next/dynamic'
import { wrapper } from '@store/index'
import { GetServerSideProps, NextPage } from 'next'
import { getProducts } from '@store/slice/productSlice'
import { getBanners } from '@store/slice/bannerSlice'

const LandingPage = dynamic(() => import('@components/template/landing-page'))

const Home: NextPage = () => {
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
