import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import languageReducer from './slices/languageSlice'
import loginReducer from './slices/loginSlice'
import { aboutBandApi } from './slices/aboutBandSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    loggedIn: loginReducer,
    [aboutBandApi.reducerPath]: aboutBandApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(aboutBandApi.middleware),
})

setupListeners(store.dispatch)