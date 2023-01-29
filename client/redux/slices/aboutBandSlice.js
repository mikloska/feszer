import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aboutBandApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getAboutBand: builder.query({
      query: () => 'about-band',
    }),
  }),
})

export const { useGetAboutBandQuery } = aboutBandApi