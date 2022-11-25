import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '@components/global/layout'
import { useSelector } from 'react-redux'
import { selectProductBySlug } from '@store/index'
import { localize } from '@utils/lib/formatter'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { pageAnimation } from '@components/atoms/animations'

const FirstSection = dynamic(
  () => import('@components/organisms/products/details/sections/FirstSection'),
  { ssr: false },
)

const ProductDetailsPage: React.FC = () => {
  const { locale } = useRouter()
  const { productBySlug } = useSelector(selectProductBySlug)

  return (
    <Layout
      title={
        localize(locale, 'details') + ' ' + `${productBySlug?.attributes?.name}`
      }
      mt="3.75rem"
    >
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <FirstSection />
      </motion.div>
    </Layout>
  )
}

export default ProductDetailsPage
