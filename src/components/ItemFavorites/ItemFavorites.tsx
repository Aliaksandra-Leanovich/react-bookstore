import React from "react";
import { Trash } from "../../assets";
import { INewBookApi } from "../../services/types/index";
import { useAppDispatch } from "../../store/hooks/hooks";
import { deleteFavorite } from "../../store/slices/userSlice";
import {
  AdditionalContainer,
  StyledItemFavorites,
  BookImage,
  BookPrice,
  BookSubtitle,
  BookTitle,
  InfoContainer,
  StyledLink,
  TrashContainer,
} from "./style";

interface IBook {
  book: INewBookApi;
}

export const ItemFavorites = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleFavorite = (book: any) => {
    dispatch(deleteFavorite(book));
  };
  return (
    <StyledItemFavorites>
      <StyledLink to={`/books/${book.isbn13}`}>
        <BookImage src={book.image} alt={book.title} />
        <InfoContainer>
          <BookTitle>{book.title}</BookTitle>
          <BookSubtitle>{book.subtitle}</BookSubtitle>
        </InfoContainer>
        <AdditionalContainer>
          <BookPrice>
            {book.price === "$0.00" ? "Currently not available" : book.price}
          </BookPrice>
        </AdditionalContainer>
      </StyledLink>
      <TrashContainer onClick={() => handleFavorite(book)}>
        <Trash />
      </TrashContainer>
    </StyledItemFavorites>
  );
};
