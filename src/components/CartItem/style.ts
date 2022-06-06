import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledItemCart = styled.li`
  width: 100%;
  padding: 5px 50px;

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;

  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 10px 5px 5px ${Colors.BLUE};
  }
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
export const TrashContainer = styled.div`
  cursor: pointer;

  margin-left: 20px;
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
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
