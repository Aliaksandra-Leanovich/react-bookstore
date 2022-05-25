import React from "react";
import { Heart } from "../../assets";
import { INewBookApi } from "../../services/types/intex";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addFavorite } from "../../store/slices/userSlice";
import {
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
  HeartContainer,
} from "./styles";

interface IBook {
  book: INewBookApi;
}

export const ListItem = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleFavorite = (book: INewBookApi) => {
    dispatch(addFavorite(book));
  };
  return (
    <StyledBookItem key={book.isbn13}>
      <HeartContainer onClick={() => handleFavorite(book)}>
        <Heart />
      </HeartContainer>
      <StyledLink to={`/bookstore/books/${book.isbn13}`}>
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
