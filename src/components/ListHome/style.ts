import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  width: 100%;
  max-width: 960px;

  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
const StyledBookItem = styled.div`
  padding: 1rem;
  max-width: 352px;
  border: 1px solid grey;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const BookImage = styled.img`
  max-width: 226px;
`;
const BookTitle = styled.h3`
  ${typography.H3}
  color: #313037;
`;
const BookSubtitle = styled.p`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(168, 168, 168);
`;
const BookPriceContainer = styled.div`
  display: block;
`;
const BookPrice = styled.h3`
  margin-bottom: 10px;
  ${typography.H3}
  color: #313037;
`;

export {
  StyledBookList,
  StyledBookItem,
  BookPrice,
  BookPriceContainer,
  BookSubtitle,
  BookTitle,
  BookImage,
};
