import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces';

interface IUsersDataSlice {
  usersData: IUser[];
}

const initialState: IUsersDataSlice = {
  usersData: [],
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setUsersToStore: (state, action: PayloadAction<IUser[]>) => {
      state.usersData = action.payload;
    },
  },
});

export const { setUsersToStore } = usersDataSlice.actions;

export default usersDataSlice.reducer;
