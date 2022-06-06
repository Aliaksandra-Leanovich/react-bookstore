import React, { ReactNode, useId } from "react";
import { Element } from "react-scroll";
import { Down, Favorites, FilledStar, NoFilledStar } from "../../assets";
import { IBookDetailsApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setCart } from "../../store/slices/cartSlice";
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

interface IDetailsBook {
  books: IBookDetailsApi;
}

export const DetailedBook = ({ books }: IDetailsBook) => {
  const dispatch = useAppDispatch();

  const handleFavorite = (books: any) => {
    dispatch(setFavorite(books));
  };

  const handleCart = (books: any) => {
    dispatch(setCart(books));
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
      <BookTitle>{books?.title ? books.title : "No title"}</BookTitle>
      <ContainerBook>
        <ImageContainer>
          <FavoriteContainer onClick={() => handleFavorite(books)}>
            <Favorites />
          </FavoriteContainer>
          <BookImage src={books?.image} alt={books?.title} />
        </ImageContainer>
        <MainInformation>
          <ContainerMainInfo>
            <Info>Author</Info>
            <TextInfo>{books?.authors ? books.authors : "No author"}</TextInfo>
            <Info>Language</Info>
            <TextInfo>{books?.language}</TextInfo>
            <Info>Rating</Info>
            <ContainerRating>
              <TextInfo>{books?.rating} </TextInfo>
              <Stars>{drawRating(`${books?.rating}`)}</Stars>
            </ContainerRating>
            <Info>Price</Info>
            <TextInfo>
              {books?.price === "$0.00"
                ? "Currently not available"
                : books?.price}
            </TextInfo>
            <StyledLink to="details" duration={500} smooth={true}>
              More detailse
              <Down />
            </StyledLink>
          </ContainerMainInfo>
          <AddToCartButton onClick={() => handleCart(books)}>
            ADD TO CART
          </AddToCartButton>
        </MainInformation>
      </ContainerBook>
      <Element name="details">
        <TabsContainer>
          <Tab> Description </Tab>
          <Tab>More Details</Tab>
          <Tab>Author</Tab>
        </TabsContainer>
        <Description>{books?.desc}</Description>
        <ContainerSecondInfo>
          <Info>Author</Info>
          <TextInfo>{books?.authors ? books.authors : "No author"}</TextInfo>
          <Info>Language</Info>
          <TextInfo>{books?.language}</TextInfo>
          <Info>Pubisher</Info>
          <TextInfo>{books?.publisher}</TextInfo>
          <Info>Year</Info>
          <TextInfo>{books?.year}</TextInfo>
          <Info>ISBN 10</Info>
          <TextInfo>{books?.isbn10}</TextInfo>
          <Info>ISBN 13</Info>
          <TextInfo>{books?.isbn13}</TextInfo>
          <Info>Rating</Info>
          <ContainerRating>
            <TextInfo>{books?.rating} </TextInfo>
            <Stars>{drawRating(`${books?.rating}`)}</Stars>
          </ContainerRating>
          <Info>Price</Info>
          <TextInfo>
            {books?.price === "$0.00"
              ? "Currently not available"
              : books?.price}
          </TextInfo>
        </ContainerSecondInfo>
      </Element>
    </StyledDetailed>
  );
};
