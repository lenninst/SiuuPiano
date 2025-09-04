import React, { FC, useState } from 'react';
import { Howl } from 'howler';

interface PianoKeyProps {
  soundSrc: string;
  color: string;
}
const PianoKey: FC<PianoKeyProps> = ({ soundSrc, color }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = new Howl({
    src: [`sounds/${soundSrc}.wav`],
  });
  const handlerButton = () => {
    console.log('reproduciendo...');
    sound.play();
    setIsPlaying(true);
  };

  const stopSound = () => {
    console.log('detenido...');
    sound.stop();
    setIsPlaying(false);
  };

  return (
    <div>
      <div className={color} onMouseDown={handlerButton} onMouseUp={stopSound}></div>
    </div>
  );
};

export default PianoKey;
