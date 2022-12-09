import React from "react";
import { DivContainer } from "./styled";

interface DivProps {
  children: React.ReactNode;
}

export const Div: React.FC<DivProps> = ({ children }) => {
  return <DivContainer>{children}</DivContainer>;
};
