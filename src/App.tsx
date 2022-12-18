import React, { useState } from "react";
import "./App.css";
import { Background } from "./components/background";
import { Settings } from "./components/settings";
import { MediaController } from "./components/controller";
import { PlaylistDropDown } from "./components/playlist_dropdown";

export type PlayLists = "sermons" | "rap_gospel" | "chants";

function App() {
  const [playList, setPlayList] = useState<PlayLists>("sermons");

  return (
    <Background type={playList}>
      <>
        <Settings
          setPlayList={(playlist: PlayLists) => {
            setPlayList(playlist);
          }}
        />
        <MediaController />
        <PlaylistDropDown />
      </>
    </Background>
  );
}

export default App;
