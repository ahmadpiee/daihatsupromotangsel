import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Proxy, { endPoint } from '@store/Proxy'
import axios from 'axios'

export const getArticles = createAsyncThunk(
  'articles/getAll',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await Proxy.get(endPoint.articles)
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

export const { setSearch } = articleSlice.actions
