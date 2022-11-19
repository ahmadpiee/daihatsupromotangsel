import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'

export const getCatalogs = createAsyncThunk(
  'catalogs/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(endPoint.catalogs)
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
export const getCatalogById = createAsyncThunk(
  'catalogs/byId',
  async (id: any, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(
        endPoint.catalog + `/${id}?populate=deep, 5`,
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

interface headerState {
  catalogs: []
  catalogById: {}
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: headerState = {
  catalogs: [],
  catalogById: {},
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const catalogSlice = createSlice({
  name: 'catalogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCatalogs.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getCatalogs.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.catalogs = action.payload.data
      },
    )
    builder.addCase(
      getCatalogs.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})

// by id
export const catalogByIdSlice = createSlice({
  name: 'catalogById',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCatalogById.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getCatalogById.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.catalogById = action.payload.data
      },
    )
    builder.addCase(
      getCatalogById.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})
