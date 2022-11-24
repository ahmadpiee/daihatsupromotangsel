import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'
import axios from 'axios'

export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(endPoint.products)
      return fulfillWithValue(response.data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)
export const getProductBySlug = createAsyncThunk(
  'products/bySlug',
  async (slug: any, { fulfillWithValue, rejectWithValue }) => {
    const cancelToken = axios.CancelToken.source()
    try {
      const response = await Proxy.get(
        endPoint.product + `/${slug}?populate=deep`,
        { cancelToken: cancelToken.token },
      )
      return fulfillWithValue(response.data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else if (axios.isCancel(error)) {
        console.log('canceled!', error.message)
        return cancelToken.cancel()
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

interface headerState {
  products: []
  productBySlug: {}
  productLinkBrosur: string
  productBySlugImages: []
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: headerState = {
  products: [],
  productBySlug: {},
  productLinkBrosur: '',
  productBySlugImages: [],
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload.data
      },
    )
    builder.addCase(
      getProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})

// by id
export const productBySlugReducer = createSlice({
  name: 'productBySlug',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProductBySlug.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getProductBySlug.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.productBySlug = action.payload.data
        state.productLinkBrosur = action.payload.data?.attributes?.link_brosur
        state.productBySlugImages = action.payload.data?.attributes?.images
      },
    )
    builder.addCase(
      getProductBySlug.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})
