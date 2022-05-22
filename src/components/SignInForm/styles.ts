import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledSignInForm = styled.form`
  display: grid;
  row-gap: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 500px;
`;
const SignInInput = styled.input`
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
const SignInButton = styled.button`
  cursor: pointer;
  border: 2px solid ${Colors.BLACK};
  color: ${Colors.BLACK};
  background-color: ${Colors.ORANGE};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px;
  border-radius: 25px;
  width: 100%;
`;
export { StyledSignInForm, SignInInput, SignInButton };
