import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value : {
    Magyar: null,
    English: null
  }
}

export const aboutBandSlice = createSlice({
  name: 'aboutBand',
  initialState,
  reducers: {
    getAbout: (state, payload) => {
      state.value = action.payload
    }
  },
})

export const { getAbout } = aboutBandSlice.actions

export default aboutBandSlice.reducer