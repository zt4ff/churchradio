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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songName , setSongName] = useState<string>('Jesus is Lord - Drake')


  const songs = [
    'Halleluja - donny',
    'bles lord - joghn',
    'Hall - d',
    'yes lord- funshy',
   ]

const next = async () => {
  setSongName(songs[Math.floor(Math.random()*songs.length)]);
}
  return (
    <>
      <CurrentlyPlaying songName={songName}/>
      <MediaControllerContainer>
        <Button size="large" variant="outlined">
          <FaBackward onClick={()=> next()}/>
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setIsPlaying(!isPlaying);
            console.log('ready to play');
          
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button variant="outlined" size="large">
          <FaForward onClick={()=> next()}/>
        </Button>
      </MediaControllerContainer>
    </>
  );
};
