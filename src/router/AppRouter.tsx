import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";
import { Cart } from "../pages/Cart";
import { DetailsBook } from "../pages/DetailsBook";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { NewBooks } from "../pages/NewBooks";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";
import { Signin } from "../pages/Signin";
import { routes } from "../routes/routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path={routes.HOME} element={<Home />}></Route>
        <Route path="/newbooks" element={<NewBooks />}></Route>
        <Route path="/books/:id" element={<DetailsBook />}></Route>
        <Route path="/search/:title/:page" element={<Search />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path={routes.CART} element={<Cart />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path={routes.SIGNIN} element={<Signin />}></Route>
        <Route path={routes.SIGNUP} element={<Register />}></Route>
        <Route path={routes.NOT_FOUND} element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
