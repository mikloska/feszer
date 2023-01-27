import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'MAGYAR'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state) => {
      state.value = state.value === 'MAGYAR' ? 'ENGLISH' : 'MAGYAR'
    }
  },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer