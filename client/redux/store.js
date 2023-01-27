import { configureStore } from '@reduxjs/toolkit'

import languageReducer from './slices/languageSlice'
import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    loggedIn: loginReducer
  },
})