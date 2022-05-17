import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Account } from "../pages/Account";
import { Cart } from "../pages/Cart";
import { DetailsBook } from "../pages/DetailsBook";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/:id" element={<DetailsBook />}></Route>
        <Route path="/search/:title/:page" element={<Search />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
