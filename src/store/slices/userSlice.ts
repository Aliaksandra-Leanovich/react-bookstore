import { createSlice } from "@reduxjs/toolkit";
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
  },
});
export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;
