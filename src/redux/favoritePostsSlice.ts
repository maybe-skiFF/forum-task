import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../interfaces';

interface IFavoritePostsSlice {
  favoritesPosts: IPost[];
}

const initialState: IFavoritePostsSlice = {
  favoritesPosts: [],
};

export const favoritePostsSlice = createSlice({
  name: 'favoritesPosts',
  initialState,
  reducers: {
    addPostToFavorite: (state, action: PayloadAction<IPost>) => {
      const isInFavorites = state.favoritesPosts.some(
        post => post.id === action.payload.id,
      );
      if (!isInFavorites) state.favoritesPosts.push(action.payload);
    },
    removePostFromFavorites: (state, action: PayloadAction<number>) => {
      state.favoritesPosts = state.favoritesPosts.filter(
        post => post.id !== action.payload,
      );
    },
  },
});

export const { addPostToFavorite, removePostFromFavorites } =
  favoritePostsSlice.actions;

export default favoritePostsSlice.reducer;
