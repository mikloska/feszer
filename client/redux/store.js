import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import languageReducer from './slices/languageSlice'
import loginReducer from './slices/loginSlice'
import loadingReducer from './slices/loadingSlice'
import { aboutBandApi } from './slices/aboutBandSlice'
import { aboutMembersApi } from './slices/aboutMembersSlice'
import { eventsApi } from './slices/eventsSlice'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    loggedIn: loginReducer,
    loading: loadingReducer,
    [aboutBandApi.reducerPath]: aboutBandApi.reducer,
    [aboutMembersApi.reducerPath]: aboutMembersApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(aboutBandApi.middleware, aboutMembersApi.middleware, eventsApi.middleware),
})

setupListeners(store.dispatch)