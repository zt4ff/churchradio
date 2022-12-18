import React from "react";
import { PlaylistDropDownContainer, PlaylistOption } from "./styled";

// TODO - update use states
const playlists = ["fuji", "reggae"];

export const PlaylistDropDown: React.FC = () => {
  return (
    <PlaylistDropDownContainer>
      {playlists.map((playlist) => (
        <PlaylistOption>{playlist}</PlaylistOption>
      ))}
    </PlaylistDropDownContainer>
  );
};
