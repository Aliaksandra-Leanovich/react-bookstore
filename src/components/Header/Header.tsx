import { Nav } from "../Nav/Nav";
import { StyledIcon, StyledHeader } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HeaderForm from "../HeaderForm/HeaderForm";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledIcon src={logo} alt="logo"></StyledIcon>
      </Link>
      <HeaderForm />
      <Nav />
    </StyledHeader>
  );
};
