import React from "react";
import { INewBookApi } from "../../services/types/intex";
import {
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
} from "./styles";

interface IBook {
  book: INewBookApi;
}

export const ListItem = ({ book }: IBook) => {
  return (
    <StyledBookItem key={book.isbn13}>
      <StyledLink to={`/books/${book.isbn13}`}>
        <BookImage src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
        <BookPrice>
          {book.price === "$0.00" ? "Currently not available" : book.price}
        </BookPrice>
      </StyledLink>
    </StyledBookItem>
  );
};
