import React from 'react'
import dynamic from 'next/dynamic'

const Banner = dynamic(
  () => import('@components/organisms/landing-page/Banner'),
  { ssr: false },
)
const Intro = dynamic(
  () => import('@components/organisms/landing-page/Intro'),
  { ssr: false },
)
const Closure = dynamic(
  () => import('@components/organisms/landing-page/Closure'),
  { ssr: false },
)

const LandingPage: React.FC = () => {
  return (
    <>
      <Banner />
      <Intro />
      <Closure />
    </>
  )
}

export default LandingPage
