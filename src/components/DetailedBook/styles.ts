import { Link } from "react-scroll";
import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledDetailed = styled.div`
  padding: 20px 30px;
`;

export const MainInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerMainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  padding-bottom: 64px;

  border-bottom: 1px ${Colors.GREY} solid;
`;

export const BookImage = styled.img`
  height: 370px;

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;
`;

export const BookTitle = styled.p`
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 1.5px;

  color: ${Colors.BLACK};

  margin-bottom: 16px;
`;

export const BookAuthor = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.5px;

  color: ${Colors.GREY};

  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  align-items: center;

  cursor: pointer;
`;
export const ContainerRating = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 25px;
`;

export const Count = styled.p`
  font-size: 27px;
  line-height: 35px;
  font-weight: 400;
`;

export const BookPrice = styled.p`
  font-size: 29px;
  line-height: 35px;
  font-weight: 500;

  margin-bottom: 25px;
`;

export const AddToCartButton = styled.button`
  font-size: 16px;
  font-weight: 500;

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;

  width: 160px;
  padding: 7px 16px;
  margin-bottom: 25px;

  background-color: ${Colors.ORANGE};

  cursor: pointer;
`;
