import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '@components/global/layout'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'

const Banner = dynamic(
  () => import('@components/organisms/landing-page/Banner'),
)
const ProductList = dynamic(
  () => import('@components/organisms/landing-page/ProductList'),
  { ssr: false },
)
const CarsMarquee = dynamic(
  () => import('@components/organisms/landing-page/CarsMarquee'),
  { ssr: false },
)
const Location = dynamic(
  () => import('@components/organisms/landing-page/Location'),
  { ssr: false },
)

const LandingPage: React.FC = () => {
  const { locale } = useRouter()
  return (
    <>
      <Banner />
      <CarsMarquee />
      <Layout maxW="8xl" p="0.75rem" title={localize(locale, 'home')}>
        <ProductList />
        <Location />
      </Layout>
    </>
  )
}

export default LandingPage
