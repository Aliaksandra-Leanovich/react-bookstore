import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../services/types/intex";

interface IUserStore {
  isAuthorized: boolean;
  email: string | null;
  name: string | null;
  favorites: IBook[];
  cart: IBook[];
}

const initialState: IUserStore = {
  isAuthorized: true, //change!
  email: null,
  name: "User",
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
    addFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    addToCart: (state, { payload }: PayloadAction<IBook>) => {
      state.cart = [
        { ...payload },
        ...state.cart.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
  },
});
export const { setUser, unsetUser, addFavorite, addToCart } = userSlice.actions;
export default userSlice.reducer;
