import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import storage from '@store/storage'
import { HYDRATE } from 'next-redux-wrapper'

// reducers

const combineReducer = combineReducers({
  // [linkSlice.name]: linkSlice.reducer,
})

export const rootReducer = (
  state: ReturnType<typeof combineReducer>,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return combineReducer(state, action)
  }
}

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}
