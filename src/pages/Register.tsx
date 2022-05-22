import styled from "styled-components";
import { typography } from "../ui/typography";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
import { Colors } from "../ui/colors";

export const Register = () => {
  return (
    <StyledRegister>
      <RegisterTitle>Become part of our book community!</RegisterTitle>
      <SignUpForm />
      <LinkToSignIn to={routes.SIGNIN}>I already have an account.</LinkToSignIn>
    </StyledRegister>
  );
};
const StyledRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RegisterTitle = styled.h2`
  ${typography.H2}
`;
const LinkToSignIn = styled(Link)`
  color: ${Colors.BLACK};
  font-size: 16px;
  font-weight: 400;
`;
