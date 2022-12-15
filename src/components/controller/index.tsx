import React, { useState } from "react";
import { Button } from "../button";
import { MediaControllerContainer } from "./styled";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

export const MediaController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MediaControllerContainer>
      <Button size="large" variant="outlined">
        <FaBackward />
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          console.log("working");
          setIsPlaying((x) => !x);
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </Button>
      <Button variant="outlined" size="large">
        <FaForward />
      </Button>
    </MediaControllerContainer>
  );
};
