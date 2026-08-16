import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductsResponse } from '../types/product';

export const PRODUCTS_PAGE_SIZE = 10;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      // Cache all pages under a single entry keyed by endpoint name so
      // "Load More" accumulates results instead of replacing them.
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.products.push(...newItems.products);
        currentCache.total = newItems.total;
        currentCache.skip = newItems.skip;
        currentCache.limit = newItems.limit;
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg?.skip !== previousArg?.skip,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
