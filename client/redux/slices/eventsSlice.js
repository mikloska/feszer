import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => 'events',
    }),
    updateEvents: builder.mutation({
      query: (payload) => ({
        url: '/events',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      query: (payload) => ({
        url: '/events',
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      query: (payload) => ({
        url: '/events',
        method: 'DELETE',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      // invalidatesTags: ['Put'],
    }),
  }),
})

export const { useGetEventsQuery } = eventsApi