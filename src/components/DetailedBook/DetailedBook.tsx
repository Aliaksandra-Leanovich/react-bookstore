import React from "react";
import { StyledDetailed } from "./styles";
interface IBook {
  title: string;
  price: string;
  author: string;
}

interface IDetailsBook {
  detailsBook: IBook | undefined;
}

export const DetailedBook = ({ detailsBook }: IDetailsBook) => {
  return (
    <StyledDetailed>
      <h2>{detailsBook?.title ? detailsBook.title : "No title"}</h2>
      <h2>{detailsBook?.price}</h2>
      <h2>{detailsBook?.author}</h2>
    </StyledDetailed>
  );
};
