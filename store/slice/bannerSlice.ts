import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'

export const getBanners = createAsyncThunk(
  'banners/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(endPoint.banner)
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

interface headerState {
  bannerImages: []
  bannerData: {}
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: headerState = {
  bannerImages: [],
  bannerData: {},
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const bannerReducer = createSlice({
  name: 'banners',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBanners.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getBanners.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.bannerImages = action.payload.data?.attributes?.images?.data
        state.bannerData = action.payload.data?.attributes
      },
    )
    builder.addCase(
      getBanners.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})
