import styled from "styled-components";
import { ButtonSizeTypes, ButtonType } from "./index";

interface ButtonContainerProps {
  size: ButtonSizeTypes;
  variant?: ButtonType;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: #fff;
  cursor: pointer;

  ${({ size }) => {
    if (size === "small") return `height: 40px; width: 10px`;
    else if (size === "medium") return `height: 45px; width: 120px`;
    return `height: 50px; width: 140px`;
  }};

  ${({ variant }) => {
    if (variant === "filled")
      return `border: 1px solid #fff;
    background: #00000087;`;
    else if (variant === "outlined")
      return `
    border: none;
    background: none;
    `;
  }};
`;
