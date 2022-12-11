import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
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
import { persistConfig, rootReducer } from '@store/reducers'
import logger from 'redux-logger'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { isNotProduction } from '@utils/helpers/process-env'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
// hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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

export const selectLinks = (state: RootState) => state.links
export const selectProducts = (state: RootState) => state.products
export const selectProductBySlug = (state: RootState) => state.productBySlug
export const selectBanners = (state: RootState) => state.banners
export const selectArticles = (state: RootState) => state.articles
export const selectSearchArticle = (state: RootState) => state.articles.search
export const selectFilteredArticle = (state: RootState) =>
  state.articles.filteredArticle
export const selectArticleById = (state: RootState) => state.articleById
