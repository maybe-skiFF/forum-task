import { configureStore } from '@reduxjs/toolkit';
import usersDataReducer from './usersDataSlice';

export const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
