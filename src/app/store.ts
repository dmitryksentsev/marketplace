import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../store/authSlice';
import { productsMiddleware, productsReducer, productsReducrPath } from '../store/productsApi';
import { productsSlice } from '../store/productsSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsMiddleware),
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [productsReducrPath]: productsReducer,
    [productsSlice.name]: productsSlice.reducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
