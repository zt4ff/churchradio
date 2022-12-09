import React from "react";
import { BackgroundContainerDiv } from "./styled";
import { PlayLists } from "../../App";

interface BackgroundProps {
  type: PlayLists;
  children: React.ReactElement;
}

export const Background: React.FC<BackgroundProps> = ({ children, type }) => {
  return (
    <BackgroundContainerDiv type={type}>{children}</BackgroundContainerDiv>
  );
};
