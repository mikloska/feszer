import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aboutBandApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getAboutBand: builder.query({
      query: () => 'about-band',
    }),
    updateAboutMember: builder.mutation({
      query: (payload) => ({
        url: '/about-band',
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      // invalidatesTags: ['Put'],
    }),
  }),
})

export const { useGetAboutBandQuery } = aboutBandApi