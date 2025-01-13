import { config } from '@/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.api.baseUrl }),
  endpoints: (builder) => ({
    getSomethingById: builder.query<unknown, string>({
      query: (id) => `route/${id}`,
    }),
  }),
})
export const { useGetSomethingByIdQuery } = exampleApi
