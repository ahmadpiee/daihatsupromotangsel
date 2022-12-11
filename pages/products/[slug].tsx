import React from 'react'
import { wrapper } from '@store/index'
import { getProductBySlug } from '@store/slice/products/productBySlugSlice'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'

const ProductDetailsPage = dynamic(
  () => import('@components/template/products/details'),
  { ssr: false },
)

const ProductBySlugPage: NextPage = () => {
  return (
    <>
      <ProductDetailsPage />
    </>
  )
}

export default ProductBySlugPage

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async ctx => {
    await store.dispatch(getProductBySlug(ctx.query.slug))
    return {
      props: {},
    }
  })
