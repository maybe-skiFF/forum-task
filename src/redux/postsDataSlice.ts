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
    addNewPostToStore: (state, action: PayloadAction<IPost>) => {
      state.postsData = [...state.postsData, action.payload];
    },
    movePostToTop: (state, action: PayloadAction<number>) => {
      const index = state.postsData.findIndex(
        post => post.id === action.payload,
      );

      if (index !== -1) {
        const [removedPost] = state.postsData.splice(index, 1);
        state.postsData.unshift(removedPost);
      }
    },
    movePostUp: (state, action: PayloadAction<number>) => {
      const index = state.postsData.findIndex(
        post => post.id === action.payload,
      );

      if (index > 0) {
        const [removedPost] = state.postsData.splice(index, 1);
        state.postsData.splice(index - 1, 0, removedPost);
      }
    },
    movePostDown: (state, action: PayloadAction<number>) => {
      const index = state.postsData.findIndex(
        post => post.id === action.payload,
      );

      if (index < state.postsData.length - 1) {
        const [removedPost] = state.postsData.splice(index, 1);
        state.postsData.splice(index + 1, 0, removedPost);
      }
    },
  },
});

export const {
  setPostsToStore,
  deletePostFromStore,
  addNewPostToStore,
  movePostToTop,
  movePostUp,
  movePostDown,
} = postsDataSlice.actions;

export default postsDataSlice.reducer;
