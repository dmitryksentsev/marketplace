import {
  createAsyncThunk,
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import type { LoginArgs } from '../types';

import { APP_AUTH_TOKEN } from '../constants';

export type AuthState = {
  accessToken: null | string;
  error: null | string;
  isLoading: boolean;
  refreshToken: null | string;
};

const initialState: AuthState = {
  accessToken: null,
  error: null,
  isLoading: false,
  refreshToken: null,
};

export type AppError = {
  message?: string;
};

export type LoginResult = {
  accessToken: string;
  refreshToken: string;
};

export type RestoreTokensResult = {
  accessToken: string | null;
};

export const login = createAsyncThunk<LoginResult, LoginArgs, { rejectValue: AppError }>(
  'api/login',
  async (arg: LoginArgs, { rejectWithValue }) => {
    const { save, ...otherArgs } = arg;
    try {
      const result = await fetch('/api/auth/login', {
        body: JSON.stringify({
          ...otherArgs,
          expiresInMins: 30,
          // credencials: "include" // doesnt work without vpn;
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await result.json();

      if (!result.ok) {
        return rejectWithValue({ message: data?.message });
      }

      const { accessToken, refreshToken } = data;

      if (save) {
        localStorage.setItem(APP_AUTH_TOKEN, btoa(accessToken));
      }

      return {
        accessToken,
        refreshToken,
      };
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : 'Something went wrong';

      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const restoreTokens = createAsyncThunk<RestoreTokensResult, void>('api/restoreTokens', () => {
  const storedValue = localStorage.getItem(APP_AUTH_TOKEN);
  const accessToken = storedValue ? atob(storedValue) : null;

  return {
    accessToken
  };
});

export const authSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (draft) => {
        draft.isLoading = true;
        draft.error = null;
      })
      .addCase(login.fulfilled, (draft, { payload }: PayloadAction<LoginResult>) => {
        draft.isLoading = false;
        draft.accessToken = payload.accessToken;
        draft.refreshToken = payload.refreshToken;
      })
      .addCase(login.rejected, (draft, { payload }) => {
        draft.error = payload?.message || 'Error';
        draft.isLoading = false;
      })
      .addCase(restoreTokens.fulfilled, (draft, { payload }: PayloadAction<RestoreTokensResult>) => {
        draft.accessToken = payload.accessToken;
      });
  },
  initialState,
  name: 'auth',
  reducers: {
    logOut: (draft) => {
      draft.accessToken = null;
      draft.refreshToken = null;
    },
    updateTokens: (draft, { payload }: PayloadAction<LoginResult>) => {
      draft.accessToken = payload.accessToken;
      draft.refreshToken = payload.refreshToken;
    },
  },
});

export default authSlice;

export const { logOut, updateTokens } = authSlice.actions;

export const selectAuth = (state: RootState) => state[authSlice.name];

export const selectError = createSelector(selectAuth, (state) => state.error);

export const selectLoading = createSelector(selectAuth, (state) => state.isLoading);

export const selectIsLoggedIn = createSelector(selectAuth, (state) => state.accessToken !== null);
