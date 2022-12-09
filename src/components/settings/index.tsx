import React from "react";
import { PlayLists } from "../../App";
import { SettingsContainer } from "./styled";
import { Thumbnail } from "./Thumbnail";
import { Button } from "../button";

interface SettingsProps {
  setPlayList: (playlist: PlayLists) => void;
}

const playLists: Array<PlayLists> = ["sermons", "rap_gospel", "chants"];

export const Settings: React.FC<SettingsProps> = ({ setPlayList }) => {
  return (
    <SettingsContainer>
      <p style={{ color: "#fff" }}>Change Background</p>
      <div
        style={{
          display: "flex",
          width: "70%",
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
      <Button>
        <a target="_blank" href="#">
          SUPPORT US
        </a>
      </Button>
    </SettingsContainer>
  );
};
