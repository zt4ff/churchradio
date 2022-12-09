import React from "react";
import { ButtonContainer } from "./styled";

export type ButtonSizeTypes = "small" | "large" | "medium";

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSizeTypes;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
}) => {
  return <ButtonContainer size={size}>{children}</ButtonContainer>;
};
