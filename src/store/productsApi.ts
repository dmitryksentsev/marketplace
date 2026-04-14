import { createApi } from '@reduxjs/toolkit/query/react';

import type {
  AddProductArgs,
  FetchProductsArgs,
  FetchProductsResult,
  FetchSearchProductsArgs,
  Product,
} from '../types';

import { baseQueryWithReauth } from './baseQuery';

const PRODUCTS_TAG = 'PRODUCTS' as const;

export const productsApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'productsApi',
  tagTypes: [PRODUCTS_TAG],
  endpoints: (builder) => ({
    addProduct: builder.mutation<Product, AddProductArgs>({
      query: (product) => ({
        body: product,
        method: 'POST',
        url: 'products/add',
      }),
      invalidatesTags: [PRODUCTS_TAG],
    }),

    getProducts: builder.query<FetchProductsResult, FetchProductsArgs>({
      query: ({ orderBy, page, sortDirection }) => ({
        params: {
          ...(page && { skip: (page - 1) * 20 }),
          limit: 20,
          order: sortDirection,
          sortBy: orderBy,
        },
        url: '/products',
      }),
      providesTags: (result) =>
        result
          ? [
              { type: PRODUCTS_TAG, id: 'LIST' },
              ...result.products.map(({ id }) => ({
                type: PRODUCTS_TAG,
                id,
              })),
            ]
          : [{ type: PRODUCTS_TAG, id: 'LIST' }],
    }),

    searchProducts: builder.query<FetchProductsResult, FetchSearchProductsArgs>({
      query: ({ orderBy, page, query, sortDirection }) => ({
        params: {
          ...(page && { skip: (page - 1) * 20 }),
          limit: 20,
          order: sortDirection,
          q: query,
          sortBy: orderBy,
        },
        url: '/products/search',
      }),

      providesTags: (result) =>
        result
          ? [
              { type: PRODUCTS_TAG, id: 'LIST' },
              ...result.products.map(({ id }) => ({
                type: PRODUCTS_TAG,
                id,
              })),
            ]
          : [{ type: PRODUCTS_TAG, id: 'LIST' }],
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery, useSearchProductsQuery } = productsApi;
export const {
  middleware: productsMiddleware,
  reducer: productsReducer,
  reducerPath: productsReducrPath,
} = productsApi;
