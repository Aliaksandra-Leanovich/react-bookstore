import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;