import React, { useState } from "react";
import { Button } from "../button";
import { MediaControllerContainer, CurrentlyPlayingContainer } from "./styled";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaMusic,
} from "react-icons/fa";

interface CurrentlyPlayingProps {
  songName?: string;
}

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  songName,
}) => {
  return (
    <CurrentlyPlayingContainer>
      <FaMusic />
      <p>{songName || ""}</p>
    </CurrentlyPlayingContainer>
  );
};

export const MediaController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <CurrentlyPlaying songName="Jesus is Lord - Drake" />
      <MediaControllerContainer>
        <Button size="large" variant="outlined">
          <FaBackward />
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setIsPlaying((x) => !x);
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button variant="outlined" size="large">
          <FaForward />
        </Button>
      </MediaControllerContainer>
    </>
  );
};
