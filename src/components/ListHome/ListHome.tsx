import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bookApi } from "../../services/bookService";
import { INewBooksApi } from "../../services/types/intex";
import {
  StyledBookList,
  StyledBookItem,
  BookPrice,
  BookPriceContainer,
  BookSubtitle,
  BookTitle,
  BookImage,
} from "./style";

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
        return (
          <StyledBookItem key={book.isbn13}>
            <Link
              to={`/books/${book.isbn13}`}
              style={{ textDecoration: "none" }}
            >
              <BookImage src={book.image} alt={book.title} />
              <BookTitle>{book.title}</BookTitle>
              <BookSubtitle>{book.subtitle}</BookSubtitle>
              <BookPriceContainer>
                <BookPrice>{book.price}</BookPrice>
              </BookPriceContainer>
            </Link>
          </StyledBookItem>
        );
      })}
    </StyledBookList>
  );
};
