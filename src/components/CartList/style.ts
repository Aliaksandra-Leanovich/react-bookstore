import styled from "styled-components";

export const StyledListCart = styled.ul`
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const StyledTotal = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  margin-bottom: 20px;
`;

export const TitleTotal = styled.p`
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;
