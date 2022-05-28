import React, { useEffect, useState } from "react";
import { bookApi } from "../../services/bookService";
import { INewBooksApi } from "../../services/types";
import { ListItem } from "../ListItem/ListItem";
import { StyledBookList } from "./style";

export const ListHome = () => {
  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });
  useEffect(() => {
    bookApi.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);
  return (
    <StyledBookList>
      {newBooks.books.map((book) => {
        return <ListItem key={book.isbn13} book={book} />;
      })}
    </StyledBookList>
  );
};
