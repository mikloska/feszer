import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const initialState = {
  value: (localStorage.getItem('loggedIn') && JSON.parse(localStorage.getItem('loggedIn') ) === true) ? true : false,
  error: false
}

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.feszerband.com/api'}),
  endpoints: (builder) => ({
    checkLogin: builder.mutation({
      query: (payload) => ({
        url: '/login',
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
})

export const loginSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    login: (state, action) => {
      if(action.payload.loggedIn === 'successfully logged in !'){
        localStorage.setItem('loggedIn', true)
        state.value = true;
        state.error = false;
      } else {
        state.value = false;
        state.error = true;
      }
    },
    logout: (state) => {
      localStorage.setItem('loggedIn', false)
      state.value = false;
      state.error = false;
    }
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer