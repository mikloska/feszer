import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const videosApi = createApi({
  reducerPath: 'videosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.feszerband.com/api'}),
  refetchOnMountOrArgChange: 10,
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => 'videos',
    }),
    updateVideo: builder.mutation({
      query: (payload) => ({
        url: '/videos',
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
})

export const { useGetVideosQuery, useUpdateVideoMutation } = videosApi