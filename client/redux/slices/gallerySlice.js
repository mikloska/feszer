import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.feszerband.com/api'}),
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => 'gallery',
    })
  }),
})

export const { useGetGalleryQuery } = galleryApi