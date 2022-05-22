import { createSlice } from "@reduxjs/toolkit";

interface IUserStore {
  isAuthorized: boolean;
  email: string | null;
}

const initialState: IUserStore = {
  isAuthorized: false,
  email: null,
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
