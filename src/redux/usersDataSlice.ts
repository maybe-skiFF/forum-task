import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces';

interface IUsersDataSlice {
  usersData: IUser[];
  isAdmin: boolean;
}

const initialState: IUsersDataSlice = {
  usersData: [],
  isAdmin: false,
};

export const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    setUsersToStore: (state, action: PayloadAction<IUser[]>) => {
      state.usersData = action.payload;
    },
    updatingUserData: (
      state,
      action: PayloadAction<{ id: number; updatingUserData: Partial<IUser> }>,
    ) => {
      const { id, updatingUserData } = action.payload;
      const searchedUser = state.usersData.find(user => user.id === id);

      if (searchedUser) {
        Object.assign(searchedUser, updatingUserData);
      }
    },
    setAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUsersToStore, updatingUserData, setAdmin } =
  usersDataSlice.actions;

export default usersDataSlice.reducer;
