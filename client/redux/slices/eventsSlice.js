import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  refetchOnMountOrArgChange: 10,
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => 'events',
    }),
    addEvent: builder.mutation({
      query: (payload) => ({
        url: '/events',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    updateEvent: builder.mutation({
      query: (payload) => ({
        url: '/events',
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    deleteEvent: builder.mutation({
      query: (payload) => ({
        url: '/events',
        method: 'DELETE',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      // invalidatesTags: ['Put'],
    })
  }),
})

export const { useGetEventsQuery, useAddEventMutation, useUpdateEventMutation, useDeleteEventMutation } = eventsApi