import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { RootStore } from "../store/store";

export const Account = () => {
  const { isAuthorized, email } = useSelector(({ user }: RootStore) => user);

  if (isAuthorized) {
    return <h1>{email}</h1>;
  }
  return <Navigate to={routes.SIGNUP} />;
};
