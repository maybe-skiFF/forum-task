import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from './usersDataSlice';
import postsDataReducer from './postsDataSlice';

export const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
    postsData: postsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
