import styled from "styled-components";
import { ButtonSizeTypes } from "./index";

interface ButtonContainerProps {
  size: ButtonSizeTypes;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 1px solid #fff;
  cursor: pointer;
  background: #00000087;
  color: #fff;

  & a {
    color: #fff;
  }

  ${({ size }) => {
    if (size === "small") return `height: 40px; width: 10px`;
    else if (size === "medium") return `height: 45px; width: 120px`;
    return `height: 50px; width: 140px`;
  }};
`;
