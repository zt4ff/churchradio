import React from "react";
import { PlayLists } from "../../App";
import { SettingsContainer } from "./styled";
import { Thumbnail } from "./Thumbnail";
import { Button } from "../button";
import { Div } from "../div";

interface SettingsProps {
  setPlayList: (playlist: PlayLists) => void;
}

const playLists: Array<PlayLists> = ["sermons", "rap_gospel", "chants"];

export const Settings: React.FC<SettingsProps> = ({ setPlayList }) => {
  return (
    <SettingsContainer>
      <p style={{ color: "#fff" }}>Change Background</p>
      <Div>
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
      </Div>
      <Button>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/zt4ff/churchradio"
        >
          SUPPORT US
        </a>
      </Button>
    </SettingsContainer>
  );
};
