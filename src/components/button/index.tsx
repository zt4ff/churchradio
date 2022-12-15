import React from "react";
import { ButtonContainer } from "./styled";

export type ButtonSizeTypes = "small" | "large" | "medium";

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSizeTypes;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  onClick,
}) => {
  return (
    <ButtonContainer onClick={onClick} size={size}>
      {children}
    </ButtonContainer>
  );
};
