import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => 'gallery',
    })
  }),
})

export const { useGetGalleryQuery } = galleryApi