import {
  type BaseQueryFn,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import type { RootState } from '../app/store';

import { type LoginResult, logOut, updateTokens } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.accessToken;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Perform refresh token API call
    const refreshResult = await baseQuery('/refreshToken', api, extraOptions);

    if (refreshResult.data) {
      // Store new token
      api.dispatch(updateTokens(refreshResult.data as LoginResult));
      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Logout if refresh fails
      api.dispatch(logOut());
    }
  }

  return result;
};
