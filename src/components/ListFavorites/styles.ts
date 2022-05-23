import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledListFavorites = styled.ul`
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const ItemFavorites = styled.li`
  width: 100%;
  padding: 5px 50px;

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
  max-width: 180px;
  width: 100%;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  text-decoration: none;
`;

export const BookImage = styled.img`
  width: 140px;
  margin-right: 10px;
`;

export const BookPrice = styled.p`
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;

  color: ${Colors.ORANGE};
`;
export const BookTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;

  color: ${Colors.BLACK};
`;
export const BookSubtitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;

  color: ${Colors.GREY};
`;
