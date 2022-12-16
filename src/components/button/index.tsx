import React from "react";
import { ButtonContainer } from "./styled";

export type ButtonSizeTypes = "small" | "large" | "medium";
export type ButtonType = "filled" | "outlined";

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSizeTypes;
  onClick?: () => void;
  variant?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  onClick,
  variant = "filled",
}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} size={size}>
      {children}
    </ButtonContainer>
  );
};
