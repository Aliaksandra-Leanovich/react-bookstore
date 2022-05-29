import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../services/types/index";

interface IFavoriteStore {
  favorites: IBook[];
}

const initialState: IFavoriteStore = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },

    deleteFavorite: (state, isbn13) => {
      state.favorites = state.favorites.filter((item) => {
        return item.isbn13 !== isbn13.payload;
      });
    },
  },
});
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
