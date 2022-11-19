import axios from 'axios'

// const API_URL =
//   process.env.NEXT_PUBLIC_STRAPI || process.env.NEXT_PUBLIC_STRAPI_LOCAL
const API_URL = process.env.NEXT_PUBLIC_STRAPI_LOCALHOST

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
  catalogs: `/api/catalogs?populate=deep`,
  catalog: `/api/catalogs`,
}
