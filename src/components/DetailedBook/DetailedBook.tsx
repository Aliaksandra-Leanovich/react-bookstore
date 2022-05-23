import React from "react";
import { Element } from "react-scroll";
import { Down, Star } from "../../assets";

import {
  BookAuthor,
  BookImage,
  BookPrice,
  BookTitle,
  ContainerMainInfo,
  ContainerRating,
  Count,
  MainInformation,
  StyledDetailed,
  StyledLink,
} from "./styles";

interface IBook {
  title: string;
  price: string;
  author: string;
  subtitle: string;
  publisher: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  image: string;
  url: string;
}

interface IDetailsBook {
  detailsBook: IBook | undefined;
}

export const DetailedBook = ({ detailsBook }: IDetailsBook) => {
  return (
    <StyledDetailed>
      <ContainerMainInfo>
        <BookImage src={detailsBook?.image} alt={detailsBook?.title} />
        <MainInformation>
          <BookTitle>
            {detailsBook?.title ? detailsBook.title : "No title"}
          </BookTitle>
          <BookAuthor>
            {detailsBook?.author ? detailsBook.author : "No author"}
          </BookAuthor>
          <ContainerRating>
            <Count>{detailsBook?.rating} </Count>
            <Star />
          </ContainerRating>
          <BookPrice>
            {detailsBook?.price === "$0.00"
              ? "Currently not available"
              : detailsBook?.price}
          </BookPrice>
          <StyledLink to="details" duration={500} smooth={true}>
            More detailse
            <Down />
          </StyledLink>
        </MainInformation>
      </ContainerMainInfo>
      <Element name="details">
        <h2>{detailsBook?.publisher}</h2>
        <h2>{detailsBook?.pages}</h2>
        <h2>{detailsBook?.year}</h2>

        <h2>{detailsBook?.desc}</h2>
        <h2>{detailsBook?.url}</h2>
        <h2> {detailsBook?.author}</h2>
      </Element>
    </StyledDetailed>
  );
};
