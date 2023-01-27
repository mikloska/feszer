import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './slices/languageSlice'
import loginReducer from './slices/loginSlice'
import aboutBandReducer from './slices/aboutBandSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    loggedIn: loginReducer,
    aboutBand: aboutBandReducer
  },
})