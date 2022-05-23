import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getUserInfo } from "../store/selectors/userSelector";

export const Account = () => {
  const { isAuthorized, email, name } = useAppSelector(getUserInfo);
  // const { isAuthorized, email } = useSelector(({ user }: RootState) => user);

  if (isAuthorized) {
    return (
      <div>
        <h1>{email}</h1>
        <h2>{name}</h2>
      </div>
    );
  }
  return <Navigate to={routes.SIGNUP} />;
};
