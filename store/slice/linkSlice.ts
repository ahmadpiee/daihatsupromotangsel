import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'

export const getLinks = createAsyncThunk(
  'link/collectionTypes',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(endPoint.biolink)
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

const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLinks.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getLinks.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.isSuccess = true
      state.links = action.payload.data
    })
    builder.addCase(getLinks.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
    })
  },
})

export default linkSlice
