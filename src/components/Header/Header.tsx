import { Nav } from "../Nav/Nav";
import { StyledHeader } from "./style";

import { Link } from "react-router-dom";
import HeaderForm from "../HeaderForm/HeaderForm";
import { Logo } from "../../assets";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderForm />
      <Nav />
    </StyledHeader>
  );
};
