import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledSignUpForm = styled.form`
  display: grid;
  row-gap: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 500px;
`;
const SignUpInput = styled.input`
  border: 2px solid ${Colors.BLACK};
  color: ${Colors.BLACK};
  font-weight: 16px;
  line-height: 20px;
  padding: 16px;
  border-radius: 20px;
  width: 100%;
  &::placeholder {
    color: ${Colors.GREY};
  }
`;
const SignUpButton = styled.button`
  cursor: pointer;
  border: 2px solid ${Colors.BLACK};
  color: ${Colors.BLACK};
  background-color: ${Colors.YELLOW};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px;
  border-radius: 25px;
  width: 100%;
`;
export { StyledSignUpForm, SignUpButton, SignUpInput };
