import { Link } from "react-scroll";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledDetailed = styled.div`
  padding: 20px 30px;
`;

export const MainInformation = styled.div`
  max-width: 448px;
  width: 100%;
  padding-top: 30px;

  border-top: 1px solid ${Colors.GREY};
`;

export const ContainerMainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  row-gap: 30px;
  margin-bottom: 30px;
`;
export const ContainerSecondInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  row-gap: 20px;
  margin-bottom: 30px;
  margin-top: 20px;
`;
export const ContainerBook = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  padding-bottom: 50px;

  border-bottom: 1px ${Colors.GREY} solid;
`;

export const BookImage = styled.img`
  display: block;
  margin: 0 auto;
`;

export const BookTitle = styled.p`
  ${typography.H2}

  color: ${Colors.BLACK};

  margin-bottom: 16px;
`;
export const Info = styled.p`
  ${typography.subtitle}

  color: ${Colors.GREY};
`;
export const TextInfo = styled.p`
  ${typography.bodytext}
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
`;

export const AddToCartButton = styled.button`
  ${typography.button}

  border-radius: 20px;
  border: 2px solid ${Colors.BLACK};

  width: 100%;
  padding: 10px 0;
  background-color: ${Colors.ORANGE};

  cursor: pointer;

  &:hover {
    background-color: ${Colors.YELLOW};
  }
  &:active {
    background-color: ${Colors.BLUE};
  }
`;
export const Stars = styled.div`
  margin-left: 16px;
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 10px;
  margin-right: 128px;

  position: relative;

  border-radius: 20px;
  border: 2px solid ${Colors.BLACK};
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.LIGHT_BLUE};
    border-radius: 20px;
  }
  &:active {
    background-color: ${Colors.YELLOW};
    border-radius: 20px;
  }
`;

export const Description = styled.p`
  ${typography.bodytext}
`;

export const TabsContainer = styled.div`
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const Tab = styled.button`
  ${typography.tab}

  padding: 20px 40px 14px;
`;
