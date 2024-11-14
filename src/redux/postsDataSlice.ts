import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../interfaces';

interface IPostsDataSlice {
  postsData: IPost[];
}

const initialState: IPostsDataSlice = {
  postsData: [],
};

export const postsDataSlice = createSlice({
  name: 'postsData',
  initialState,
  reducers: {
    setPostsToStore: (state, action: PayloadAction<IPost[]>) => {
      state.postsData = action.payload;
    },
  },
});

export const { setPostsToStore } = postsDataSlice.actions;

export default postsDataSlice.reducer;
