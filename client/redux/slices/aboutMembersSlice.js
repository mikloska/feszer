import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const aboutMembersApi = createApi({
  reducerPath: 'aboutMembersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.URL}),
  endpoints: (builder) => ({
    getAboutMembers: builder.query({
      query: () => 'about-members',
    }),
    updateAboutMember: builder.mutation({
      query: (payload) => ({
        url: '/about-members',
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

export const { useGetAboutMembersQuery } = aboutMembersApi