import React, { ReactNode } from "react";
import { StyledButtonBack } from "./styles";

interface IButton {
  type: string;
  children: ReactNode;
  handleBack: () => void;
}

export const ButtonBack: React.FC<IButton> = ({ children, handleBack }) => {
  return <StyledButtonBack onClick={handleBack}>{children}</StyledButtonBack>;
};
