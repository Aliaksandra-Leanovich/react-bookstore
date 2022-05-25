import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Bookshelf } from "../components/BookShelf/Bookshelf";
import { routes } from "../routes/routes";
import { Colors } from "../ui/colors";

export const Home = () => {
  return (
    <StyledHome>
      <Container>
        <ContainerText>
          <HomeTitle>A Book Worm's Paradise</HomeTitle>
          <HomeDescription>
            There are many ways to spend your time... Choose the best one.
          </HomeDescription>
        </ContainerText>
        <StyledLink to={routes.NEWBOOKS}>SHOP NOW</StyledLink>
      </Container>
      <ContainerBookShelf>
        <Bookshelf />
      </ContainerBookShelf>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  width: 100%;
  padding: 40px;
  height: 400px;

  background-color: ${Colors.LIGHT_BLUE};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContainerBookShelf = styled.div``;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeTitle = styled.h2`
  font-size: 60px;

  margin-bottom: 7px;
`;

const HomeDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  text-align: center;

  width: 130px;
  padding: 7px 0;

  border: 1px solid black;
  border-radius: 12px;

  background-color: ${Colors.YELLOW};
  color: ${Colors.BLACK};

  &:active {
    background-color: ${Colors.ORANGE};
  }
`;
