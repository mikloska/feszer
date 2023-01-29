import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aboutMembersApi = createApi({
  reducerPath: 'aboutMembersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getAboutMembers: builder.query({
      query: () => 'about-members',
    }),
  }),
})

export const { useGetAboutMembersQuery } = aboutMembersApi