import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../services/types";

interface IUserStore {
  isAuthorized: boolean;
  email: string | null;
  name: string | null;
  favorites: IBook[];
  cart: IBook[];
}

const initialState: IUserStore = {
  isAuthorized: false, //change!
  email: null,
  name: null,
  favorites: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthorized = true;
      state.email = action.payload;
    },
    unsetUser: (state) => {
      state.isAuthorized = false;
      state.email = null;
    },
    setFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },

    deleteFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = state.favorites.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
    setCart: (state, { payload }: PayloadAction<IBook>) => {
      state.cart = [
        { ...payload },
        ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },

    deleteCart: (state, { payload }: PayloadAction<IBook>) => {
      state.cart = state.cart.filter((item) => item.isbn13 !== payload.isbn13);
    },
  },
});
export const {
  setUser,
  unsetUser,
  setFavorite,
  deleteFavorite,
  setCart,
  deleteCart,
} = userSlice.actions;
export default userSlice.reducer;
