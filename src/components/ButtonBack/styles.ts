import styled from "styled-components";
import { Colors } from "../../ui/colors";

export const StyledButtonBack = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;

  padding: 7px 30px;
  display: flex;
  align-items: center;

  background-color: ${Colors.BLUE};
  color: ${Colors.BLACK};

  border: 2px solid ${Colors.BLACK};
  border-radius: 15px;

  cursor: pointer;
`;
