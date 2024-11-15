import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from './usersDataSlice';
import postsDataReducer from './postsDataSlice';
import favoritePostsReducer from './favoritePostsSlice';

export const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
    postsData: postsDataReducer,
    favoritesPosts: favoritePostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
