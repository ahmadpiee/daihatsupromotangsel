import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiWithToken, endPoint } from '@store/api'

export const getProducts = createAsyncThunk(
  'products/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await apiWithToken.get(endPoint.products)
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

type ProductState = {
  products: []
  productLinkBrosur: string
  productBySlugImages: []
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: ProductState = {
  products: [],
  productLinkBrosur: '',
  productBySlugImages: [],
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.products = payload.data
    })
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
