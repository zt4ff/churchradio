import React, { useState } from "react";
import "./App.css";
import { Background } from "./components/background";
import { Settings } from "./components/settings";

export type PlayLists = "sermons" | "rap_gospel" | "chants";

function App() {
  const [playList, setPlayList] = useState<PlayLists>("sermons");

  return (
    <Background type={playList}>
      <div>
        <Settings
          setPlayList={(playlist: PlayLists) => {
            setPlayList(playlist);
          }}
        />
      </div>
    </Background>
  );
}

export default App;
