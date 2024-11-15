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
    deletePostFromStore: (state, action: PayloadAction<number>) => {
      state.postsData = state.postsData.filter(
        post => post.id !== action.payload,
      );
    },
  },
});

export const { setPostsToStore, deletePostFromStore } = postsDataSlice.actions;

export default postsDataSlice.reducer;
