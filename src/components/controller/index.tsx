import React, { useState } from "react";
import { Button } from "../button";
import { MediaControllerContainer } from "./styled";

export const MediaController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MediaControllerContainer>
      <Button size="large">
        <></>
      </Button>
      <Button
        size="large"
        onClick={() => {
          console.log("working");
          setIsPlaying((x) => !x);
        }}
      >
        {isPlaying ? <></> : <></>}
      </Button>
      <Button size="large">
        <></>
      </Button>
    </MediaControllerContainer>
  );
};
