import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiWithToken, endPoint } from '@store/api'

export const getLinks = createAsyncThunk(
  'link/collectionTypes',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await apiWithToken.get(endPoint.biolink)
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
  links: []
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: headerState = {
  links: [],
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLinks.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getLinks.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.links = payload.data
    })
    builder.addCase(getLinks.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    })
  },
})
