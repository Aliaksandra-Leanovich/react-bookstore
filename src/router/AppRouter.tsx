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
      <Route path="/react-bookstore" element={<MainTemplate />}>
        <Route path="/react-bookstore" element={<Home />}></Route>
        <Route
          path="/react-bookstore/books/:id"
          element={<DetailsBook />}
        ></Route>
        <Route
          path="/react-bookstore/search/:title/:page"
          element={<Search />}
        ></Route>
        <Route path="/react-bookstore/account" element={<Account />}></Route>
        <Route path="/react-bookstore/cart" element={<Cart />}></Route>
        <Route
          path="/react-bookstore/favorites"
          element={<Favorites />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
