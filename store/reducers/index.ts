import { combineReducers } from 'redux'
import storage from '@store/storage'
import { PayloadAction } from '@reduxjs/toolkit'

const reducers = combineReducers({})

export const rootReducer = (state: any, action: PayloadAction<string>) => {
  return reducers(state, action)
}

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}
