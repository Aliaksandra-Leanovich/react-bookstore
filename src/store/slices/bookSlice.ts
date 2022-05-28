import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { IBook, IBooksSlice } from "../../services/types";

const initialState: IBooksSlice = {
  books: [],
  error: null,
  status: "idle",
};

export const featchBooskItems = createAsyncThunk<IBook[]>(
  "books/featchBooskItems",
  async () => {
    return bookApi.getNewBooks();
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(featchBooskItems.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(featchBooskItems.fulfilled, (state, action) => {
      state.status = "success";
      state.books = action.payload;
    });
    builder.addCase(featchBooskItems.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});
export default bookSlice.reducer;
