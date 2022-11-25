import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { persistConfig, rootReducer } from '@store/reducers/index'
import logger from 'redux-logger'
import { useDispatch } from 'react-redux'
import { isNotProduction } from '@utils/helpers/process-env'

const reducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: reducers,
  middleware: defaultMiddleware => {
    if (isNotProduction) {
      return defaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger)
    }
    return defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

const makeStore = () => store

export const persistor = persistStore(store)
export const wrapper = createWrapper(
  makeStore,
  isNotProduction ? { debug: true } : { debug: false },
)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
type RootState = ReturnType<typeof store.getState>
export const selectLinks = (state: RootState) => state.links
export const selectProducts = (state: RootState) => state.products
export const selectProductBySlug = (state: RootState) => state.productBySlug
export const selectBanners = (state: RootState) => state.banners
export const selectArticles = (state: RootState) => state.articles
export const selectArticleById = (state: RootState) => state.articleById
