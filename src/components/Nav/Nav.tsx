import { Link } from "react-router-dom";
import { Account, Cart, Favorites } from "../../assets";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/account">
        <Account />
      </Link>
      <Link to="/cart">
        <Cart />
      </Link>
      <Link to="/favorites">
        <Favorites />
      </Link>
    </StyledNav>
  );
};
