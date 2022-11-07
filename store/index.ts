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

const isNotProd = process.env.NODE_ENV !== 'production'

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

const makeStore = () => store

export const persistor = persistStore(store)
export const wrapper = createWrapper(
  makeStore,
  isNotProd ? { debug: false } : { debug: false },
)

// type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export const selectAuth = (state: RootState) => state.auth
