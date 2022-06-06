import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getBooks,
  getBooksError,
  getBooksStatus,
} from "../../store/selectors/booksSelector";
import { featchBooskItems } from "../../store/slices/bookSlice";
import { ListItem } from "../ListItem/ListItem";
import { StyledBookList, StyledLoading } from "./style";
import { SpinnerDotted } from "spinners-react";

export const ListHome = () => {
  const books = useAppSelector(getBooks);
  const status = useAppSelector(getBooksStatus);
  const error = useAppSelector(getBooksError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(featchBooskItems());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <StyledLoading>
        <SpinnerDotted size={90} thickness={153} speed={149} color="#0079ff" />
      </StyledLoading>
    );
  }
  if (status === "error") {
    return <div>Error {error}</div>;
  }
  return (
    <StyledBookList>
      {books.books.map((book) => {
        return <ListItem key={book.isbn13} book={book} />;
      })}
    </StyledBookList>
  );
};
