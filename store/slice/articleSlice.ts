import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'
import axios from 'axios'

export const getArticles = createAsyncThunk(
  'articles/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(endPoint.articles)
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
export const getArticleById = createAsyncThunk(
  'articles/byId',
  async (id: any, { fulfillWithValue, rejectWithValue }) => {
    const cancelToken = axios.CancelToken.source()
    try {
      const response = await Proxy.get(
        endPoint.article + `/${id}?populate=deep`,
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
  articles: []
  articleById: {}
  isLoading: boolean
  isSuccess: boolean
  error: null
}

const initialState: headerState = {
  articles: [],
  articleById: {},
  isLoading: false,
  isSuccess: false,
  error: null,
}

export const articlesReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticles.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getArticles.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.articles = action.payload.data
      },
    )
    builder.addCase(
      getArticles.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})

// by id
export const articleByIdReducer = createSlice({
  name: 'articleById',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticleById.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(
      getArticleById.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = true
        state.articleById = action.payload.data
      },
    )
    builder.addCase(
      getArticleById.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.isSuccess = false
        state.error = action.payload
      },
    )
  },
})
