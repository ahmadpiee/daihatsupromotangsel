// import { wrapper } from '@store/index'
// import { getCatalogById } from '@store/slice/catalogSlice'
// import { GetServerSideProps } from 'next'
import React from 'react'

const ProductByIdPage = () => {
  return <div>ProductByIdPage</div>
}

export default ProductByIdPage

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ctx => {
//     await store.dispatch(getCatalogById(ctx.query.id))
//     return {
//       props: {},
//     }
//   })
