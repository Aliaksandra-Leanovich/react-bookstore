import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "../assets";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelector";

export const Cart = () => {
  const { isAuthorized, cart } = useAppSelector(getUserInfo);

  return (
    <div>
      <ul>
        {cart.map((book) => {
          return (
            <li key={book.isbn13}>
              <div>
                <Heart />
              </div>
              <Link to={`/books/${book.isbn13}`}>
                <img src={book.image} alt={book.title} />
                <p>{book.title}</p>
                <p>{book.subtitle}</p>
                <p>
                  {book.price === "$0.00"
                    ? "Currently not available"
                    : book.price}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
