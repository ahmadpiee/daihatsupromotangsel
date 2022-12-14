import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiWithToken, endPoint } from '@store/api'

export const getArticleById = createAsyncThunk(
  'articles/byId',
  async (id: any, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await apiWithToken.get(
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
  error: undefined
}

const initialStateById: ArticleByIdState = {
  articleById: {},
  isLoading: false,
  isSuccess: false,
  error: null,
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
