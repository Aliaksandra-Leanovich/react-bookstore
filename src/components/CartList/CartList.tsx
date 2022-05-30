import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelector";
import { ItemFavorites } from "../ItemFavorites/ItemFavorites";
import { StyledListCart } from "./style";

export const CartList = () => {
  const { isAuthorized, cart } = useAppSelector(getUserInfo);
  if (isAuthorized) {
    return (
      <StyledListCart>
        {cart.map((book) => {
          return <ItemFavorites key={book.isbn13} book={book} />;
        })}
      </StyledListCart>
    );
  }
  return <Navigate to={routes.SIGNUP} />;
};
