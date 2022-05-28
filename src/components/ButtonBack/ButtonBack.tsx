import React, { ReactNode } from "react";
import { Back } from "../../assets";
import { StyledButtonBack } from "./styles";

interface IButton {
  type: string;
  children: ReactNode;
  handleBack: () => void;
}

export const ButtonBack: React.FC<IButton> = ({ children, handleBack }) => {
  return (
    <StyledButtonBack onClick={handleBack}>
      <Back /> {children}
    </StyledButtonBack>
  );
};
