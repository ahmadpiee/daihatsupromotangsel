import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_STRAPI

const Token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${Token}`,
  },
})

export const endPoint = {
  // --- collection types ---
  categories: `/api/categories?populate=deep,5`,
  biolink: `/api/biolinks?populate=deep`,
  products: `/api/products?populate=deep`,
  product: `/api/products`,
  articles: `/api/articles?sort[0]=publish:desc&populate=*`,
  article: `/api/articles`,
  articlesPage: `/api/articles`,
  // --- single types ---
  banner: `/api/banner?populate=deep`,
}
