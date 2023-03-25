import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aboutBandApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.feszerband.com/api'}),
  endpoints: (builder) => ({
    getAboutBand: builder.query({
      query: () => 'about-band',
    }),
    updateAboutBand: builder.mutation({
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

export const { useGetAboutBandQuery, useUpdateAboutBandMutation } = aboutBandApi