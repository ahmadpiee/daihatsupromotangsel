import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import storage from '@store/storage'
import { HYDRATE } from 'next-redux-wrapper'

// reducers
import { productReducer, productBySlugReducer } from '@store/slice/productSlice'
import { bannerReducer } from '@store/slice/bannerSlice'
import { linksReducer } from '@store/slice/linkSlice'
import { articleSlice } from '@store/slice/articles/articleSlice'
import { articleByIdSlice } from '@store/slice/articles/articleByIdSlice'

const combineReducer = combineReducers({
  [productReducer.name]: productReducer.reducer,
  [productBySlugReducer.name]: productBySlugReducer.reducer,
  [bannerReducer.name]: bannerReducer.reducer,
  [linksReducer.name]: linksReducer.reducer,
  [articleSlice.name]: articleSlice.reducer,
  [articleByIdSlice.name]: articleByIdSlice.reducer,
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
