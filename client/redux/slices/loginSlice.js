import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  error: false
}

export const loginSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    login: (state, action) => {
      if(action.payload.username === process.env.USERNAME && action.payload.password === process.env.USER_PASSWORD){
        state.value = true;
        state.error = false;
      } else {
        state.value = false;
        state.error = true;
      }
    },
    logout: (state) => {
      state.value = false;
      state.error = false;
    }
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer