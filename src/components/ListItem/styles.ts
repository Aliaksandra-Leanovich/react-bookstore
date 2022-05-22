import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  max-width: 352px;
  border: 3px solid ${Colors.BLACK};
  box-shadow: 10px 5px 5px ${Colors.RED};
  border-radius: 20px;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 10px 5px 5px ${Colors.BLUE};
    transition: all 0.5s;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const BookImage = styled.img`
  max-width: 226px;
`;
const BookTitle = styled.h3`
  ${typography.H3}
  color: ${Colors.BLACK};
`;
const BookSubtitle = styled.p`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.GREY};
`;

const BookPrice = styled.h3`
  margin-bottom: 10px;
  ${typography.H3}
  color: ${Colors.ORANGE};
`;

export {
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
};
