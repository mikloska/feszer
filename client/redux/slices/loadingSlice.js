import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.value = action.payload.loading
    }
  },
})

export const { changeLoading } = loadingSlice.actions

export default loadingSlice.reducer