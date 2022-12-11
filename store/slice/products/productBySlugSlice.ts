import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiWithToken, endPoint } from '@store/api'

export const getProductBySlug = createAsyncThunk(
  'products/bySlug',
  async (slug: any, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await apiWithToken.get(
        endPoint.product + `/${slug}?populate=deep`,
      )
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

type ProductBySlugState = {
  productBySlug: {}
  productLinkBrosur: string
  productBySlugImages: []
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: ProductBySlugState = {
  productBySlug: {},
  productLinkBrosur: '',
  productBySlugImages: [],
  isLoading: false,
  isSuccess: false,
  error: null,
}

// by id
export const productBySlugSlice = createSlice({
  name: 'productBySlug',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProductBySlug.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getProductBySlug.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.productBySlug = payload.data
      state.productLinkBrosur = payload.data?.attributes?.link_brosur
      state.productBySlugImages = payload.data?.attributes?.images
    })
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
