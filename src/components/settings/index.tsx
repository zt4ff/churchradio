import React from "react";
import { PlayLists } from "../../App";
import { SettingsContainer } from "./styled";
import { Thumbnail } from "./Thumbnail";

interface SettingsProps {
  setPlayList: (playlist: PlayLists) => void;
}

const playLists: Array<PlayLists> = ["sermons", "rap_gospel", "chants"];

export const Settings: React.FC<SettingsProps> = ({ setPlayList }) => {
  return (
    <SettingsContainer>
      <p>Change Background</p>
      <div
        style={{
          display: "flex",
          width: "70%",
          margin: "10px auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {playLists.map((playlist) => {
          return (
            <Thumbnail
              onClick={() => {
                setPlayList(playlist);
              }}
              src={`http://localhost:3000/images/${playlist}.jpg`}
            />
          );
        })}
      </div>
    </SettingsContainer>
  );
};
