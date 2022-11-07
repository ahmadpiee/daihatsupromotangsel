import axios from 'axios'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL_LOCALHOST

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
  categories: `/api/categories?populate=*`,
  products: `/api/products?populate=*`,
  product: `/api/products/id`,
  homepage: `/api/pages?populate=*`,
  login: `/api/login`,
  Agent: `/api/login/Agent`,
  Register: `/api/register`,
  policiesId: `/api/policies?locale=id`,
  policiesEn: `/api/policies?locale=en`,
  faqsId: `/api/faqs?locale=id`,
  faqsEn: `/api/faqs?locale=en`,
  tcId: `/api/term-condition?locale=id`,
  tcEn: `/api/term-condition?locale=en`,
  aboutId: `/api/about?locale=id`,
  aboutEn: `/api/about?locale=en`,
  testimoniesId: `/api/testimonies?locale=id`,
  testimoniesEn: `/api/testimonies?locale=en`,
  htoId: `/api/order-rules?locale=id`,
  htoEn: `/api/order-rules?locale=en`,
  articlesId: `api/articles?locale=id`,
  articlesEn: `api/articles?locale=en`,

  // --- single types ---
  footer: `/api/footer?populate=*`,
  header: `/api/header?populate=*`,
}
