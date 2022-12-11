import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import storage from '@store/storage'
import { HYDRATE } from 'next-redux-wrapper'

// reducers
import { productSlice } from '@store/slice/products/productSlice'
import { productBySlugSlice } from '@store/slice/products/productBySlugSlice'
import { bannerSlice } from '@store/slice/banner/bannerSlice'
import { linksSlice } from '@store/slice/links/linkSlice'
import { articleSlice } from '@store/slice/articles/articleSlice'
import { articleByIdSlice } from '@store/slice/articles/articleByIdSlice'

const combineReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
  [productBySlugSlice.name]: productBySlugSlice.reducer,
  [bannerSlice.name]: bannerSlice.reducer,
  [linksSlice.name]: linksSlice.reducer,
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
