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
  const [songAudio, setSongAudio] = useState<string>('')


  const songs = [
    {songName:'Halleluja - donny',songAudio:'link to song'},
    {songName:'bles lord - joghn',songAudio:'link to song'},
    {songName:'yes lord - funsho',songAudio:'link to song'},
    {songName:'Hall - d',songAudio:'link to song'}
   ]


   const play = async () => {
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); 
        await audio.play();
   }

const next = async () => {
  await setSongName(songs[Math.floor(Math.random()*songs.length)].songName);
}
  return (
    <>
      <CurrentlyPlaying songName={songName}/>
      <MediaControllerContainer>
        <Button size="large" variant="outlined">
          <FaBackward onClick={()=>{ next(); play()}}/>
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setIsPlaying(!isPlaying);
            if(!isPlaying){
              play();
           }
          }}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button variant="outlined" size="large">
          <FaForward onClick={()=>{ next() ; play()}}/>
        </Button>
      </MediaControllerContainer>
    </>
  );
};
