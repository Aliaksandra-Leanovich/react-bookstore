import React, { ReactNode, useId } from "react";
import { Element } from "react-scroll";
import { Down, Favorites, FilledStar, NoFilledStar } from "../../assets";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setFavorite } from "../../store/slices/userSlice";

import {
  AddToCartButton,
  BookImage,
  ImageContainer,
  BookTitle,
  ContainerBook,
  FavoriteContainer,
  ContainerRating,
  Info,
  MainInformation,
  Stars,
  StyledDetailed,
  StyledLink,
  TextInfo,
  ContainerMainInfo,
  ContainerSecondInfo,
  Description,
  TabsContainer,
  Tab,
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
  isbn10: string;
  isbn13: string;
  desc: string;
  image: string;
  url: string;
  language: string;
}

interface IDetailsBook {
  detailsBook: IBook | undefined;
}

export const DetailedBook = ({ detailsBook }: IDetailsBook) => {
  const dispatch = useAppDispatch();
  const handleFavorite = (detailsBook: any) => {
    dispatch(setFavorite(detailsBook));
  };
  const id = useId();
  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < +rating) {
        stars.push(<FilledStar key={`${id}+${i * 33}`} />);
      } else {
        stars.push(<NoFilledStar key={`${id}+${i * 55}`} />);
      }
    }
    return stars;
  };

  return (
    <StyledDetailed>
      <BookTitle>
        {detailsBook?.title ? detailsBook.title : "No title"}
      </BookTitle>
      <ContainerBook>
        <ImageContainer>
          <FavoriteContainer onClick={() => handleFavorite(detailsBook)}>
            <Favorites />
          </FavoriteContainer>
          <BookImage src={detailsBook?.image} alt={detailsBook?.title} />
        </ImageContainer>
        <MainInformation>
          <ContainerMainInfo>
            <Info>Author</Info>
            <TextInfo>
              {detailsBook?.author ? detailsBook.author : "No author"}
            </TextInfo>
            <Info>Language</Info>
            <TextInfo>{detailsBook?.language}</TextInfo>
            <Info>Rating</Info>
            <ContainerRating>
              <TextInfo>{detailsBook?.rating} </TextInfo>
              <Stars>{drawRating(`${detailsBook?.rating}`)}</Stars>
            </ContainerRating>
            <Info>Price</Info>
            <TextInfo>
              {detailsBook?.price === "$0.00"
                ? "Currently not available"
                : detailsBook?.price}
            </TextInfo>
            <StyledLink to="details" duration={500} smooth={true}>
              More detailse
              <Down />
            </StyledLink>
          </ContainerMainInfo>
          <AddToCartButton>ADD TO CART</AddToCartButton>
        </MainInformation>
      </ContainerBook>
      <Element name="details">
        <TabsContainer>
          <Tab> Description </Tab>
          <Tab>More Details</Tab>
          <Tab>Author</Tab>
        </TabsContainer>
        <Description>{detailsBook?.desc}</Description>
        <ContainerSecondInfo>
          <Info>Author</Info>
          <TextInfo>
            {detailsBook?.author ? detailsBook.author : "No author"}
          </TextInfo>
          <Info>Language</Info>
          <TextInfo>{detailsBook?.language}</TextInfo>
          <Info>Pubisher</Info>
          <TextInfo>{detailsBook?.publisher}</TextInfo>
          <Info>Year</Info>
          <TextInfo>{detailsBook?.year}</TextInfo>
          <Info>ISBN 10</Info>
          <TextInfo>{detailsBook?.isbn10}</TextInfo>
          <Info>ISBN 13</Info>
          <TextInfo>{detailsBook?.isbn13}</TextInfo>
          <Info>Rating</Info>
          <ContainerRating>
            <TextInfo>{detailsBook?.rating} </TextInfo>
            <Stars>{drawRating(`${detailsBook?.rating}`)}</Stars>
          </ContainerRating>
          <Info>Price</Info>
          <TextInfo>
            {detailsBook?.price === "$0.00"
              ? "Currently not available"
              : detailsBook?.price}
          </TextInfo>
        </ContainerSecondInfo>
      </Element>
    </StyledDetailed>
  );
};
