import { wrapper } from '@store/index'
import { getProducts } from '@store/slice/productSlice'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

const ProductsPage: NextPage = () => {
  return <></>
}

export default ProductsPage

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    await store.dispatch(getProducts())
    return {
      props: {},
    }
  })
