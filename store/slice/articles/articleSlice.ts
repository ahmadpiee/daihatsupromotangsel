import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiWithToken, endPoint } from '@store/api'

export const getArticles = createAsyncThunk(
  'articles/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await apiWithToken.get(endPoint.articles)
      return fulfillWithValue(res.data.data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  },
)

interface Article {
  id: number
  attributes: {
    title: string
    publish: string
    description: string
    author: string
    author_avatar: {
      data: {
        id: number
        attribtues: {
          url: string
        }
      }
    }
    thumbnail: {
      data: {
        id: number
        attributes: {
          url: string
        }
      }
    }
  }
}

type ArticleState = {
  articles: Article[]
  isLoading: boolean
  isSuccess: boolean
  error: boolean
  search: string
  filteredArticle: Article[]
  pending: boolean
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  isSuccess: false,
  error: false,
  search: '',
  filteredArticle: [],
  pending: false,
}

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
      state.filteredArticle = state.articles.filter(val =>
        val.attributes.title.toLowerCase().includes(state.search.toLowerCase()),
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(getArticles.pending, state => {
      state.isLoading = true
      state.isSuccess = false
    })
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.articles = payload
      state.filteredArticle = payload
    })
    builder.addCase(getArticles.rejected, state => {
      state.isLoading = false
      state.isSuccess = false
      state.error = true
    })
  },
})

export const { setSearch } = articleSlice.actions
