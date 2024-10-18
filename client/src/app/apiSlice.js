import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
