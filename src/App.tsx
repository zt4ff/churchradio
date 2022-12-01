import React, { useState } from "react";
import "./App.css";
import { Background, PlayLists } from "./components/background";

function App() {
  const [playList, setPlayList] = useState<PlayLists>("sermons");

  return (
    <Background type={playList}>
      <div>
        <button onClick={() => setPlayList("sermons")}>s</button>
        <button onClick={() => setPlayList("rap_gospel")}>r</button>
        <button onClick={() => setPlayList("chants")}>c</button>
      </div>
    </Background>
  );
}

export default App;
