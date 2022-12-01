import React from "react";
import { BackgroundContainerDiv } from "./styled";

export type PlayLists = "sermons" | "rap_gospel" | "chants";

interface BackgroundProps {
  type: PlayLists;
  children: React.ReactElement;
}

export const Background: React.FC<BackgroundProps> = ({ children, type }) => {
  return (
    <BackgroundContainerDiv type={type}>
      <div>{children}</div>
    </BackgroundContainerDiv>
  );
};
