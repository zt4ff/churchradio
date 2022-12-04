import React from "react";
import { ThumbnailContainer } from "./styled";

interface ThumbnailProps {
  src: string;
  onClick: () => void;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, onClick }) => {
  return <ThumbnailContainer src={src} onClick={onClick} />;
};
