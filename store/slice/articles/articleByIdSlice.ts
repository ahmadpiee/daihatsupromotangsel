import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'

export const getArticleById = createAsyncThunk(
  'articles/byId',
  async (id: any, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await Proxy.get(
        endPoint.article + `/${id}?populate=deep`,
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

type ArticleByIdState = {
  articleById: {}
  isLoading: boolean
  isSuccess: boolean
  error: boolean
}

const initialStateById: ArticleByIdState = {
  articleById: {},
  isLoading: false,
  isSuccess: false,
  error: false,
}

// by id
export const articleByIdSlice = createSlice({
  name: 'articleById',
  initialState: initialStateById,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getArticleById.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.articleById = payload.data
    })
    builder.addCase(getArticleById.rejected, state => {
      state.isLoading = false
      state.isSuccess = false
      state.error = true
    })
  },
})
