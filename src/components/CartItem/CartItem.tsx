import React from "react";
import { Trash } from "../../assets";
import { INewBookApi } from "../../services/types/intex";
import { useAppDispatch } from "../../store/hooks/hooks";
import { deleteCart } from "../../store/slices/userSlice";
import {
  AdditionalContainer,
  BookImage,
  BookPrice,
  BookSubtitle,
  BookTitle,
  InfoContainer,
  StyledItemCart,
  StyledLink,
  TrashContainer,
} from "./style";

interface IBook {
  book: INewBookApi;
}

export const CartItem = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleCart = (book: any) => {
    dispatch(deleteCart(book));
  };
  return (
    <StyledItemCart>
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
      <TrashContainer onClick={() => handleCart(book)}>
        <Trash />
      </TrashContainer>
    </StyledItemCart>
  );
};
