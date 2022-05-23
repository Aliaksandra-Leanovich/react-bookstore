import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import booksReducer from "./slices/bookSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
