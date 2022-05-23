import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  max-width: 352px;

  border: 3px solid ${Colors.BLACK};
  box-shadow: 10px 5px 5px ${Colors.RED};
  border-radius: 20px;

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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Colors.GREY};

  margin-bottom: 40px;
`;

const BookPrice = styled.h3`
  ${typography.H3}

  color: ${Colors.ORANGE};

  margin-bottom: 10px;
`;
const HeartContainer = styled.div`
  align-self: flex-end;

  margin: 20px 10px 0 0;

  cursor: pointer;
`;

export {
  HeartContainer,
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
};
