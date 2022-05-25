import React from "react";
import { Navigate } from "react-router-dom";
import { Trash } from "../../assets";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelector";
import {
  AdditionalContainer,
  BookImage,
  BookPrice,
  BookSubtitle,
  BookTitle,
  InfoContainer,
  ItemFavorites,
  StyledLink,
  StyledListFavorites,
} from "./styles";

export const ListFavorites = () => {
  const { isAuthorized, favorites } = useAppSelector(getUserInfo);
  if (isAuthorized) {
    return (
      <div>
        <StyledListFavorites>
          {favorites.map((book) => {
            return (
              <ItemFavorites key={book.isbn13}>
                <StyledLink to={`/react-bookstore/books/${book.isbn13}`}>
                  <BookImage src={book.image} alt={book.title} />
                  <InfoContainer>
                    <BookTitle>{book.title}</BookTitle>
                    <BookSubtitle>{book.subtitle}</BookSubtitle>
                  </InfoContainer>
                  <AdditionalContainer>
                    <Trash />
                    <BookPrice>
                      {book.price === "$0.00"
                        ? "Currently not available"
                        : book.price}
                    </BookPrice>
                  </AdditionalContainer>
                </StyledLink>
              </ItemFavorites>
            );
          })}
        </StyledListFavorites>
      </div>
    );
  }
  return <Navigate to={routes.SIGNUP} />;
};
