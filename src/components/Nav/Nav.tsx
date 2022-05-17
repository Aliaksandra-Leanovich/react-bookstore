import { Link } from "react-router-dom";
import account from "../../assets/account.svg";
import cart from "../../assets/cart.svg";
import favorites from "../../assets/favorites.svg";
import { StyledIcon, StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/account">
        <StyledIcon src={account} alt="account"></StyledIcon>
      </Link>
      <Link to="/cart">
        <StyledIcon src={cart} alt="cart"></StyledIcon>
      </Link>
      <Link to="/favorites">
        <StyledIcon src={favorites} alt="cart"></StyledIcon>
      </Link>
    </StyledNav>
  );
};
