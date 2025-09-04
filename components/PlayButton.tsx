import React, { FC, useRef, useState } from 'react';
import style from 'styles/Buttons.module.css';
import { BsPlay, BsStop } from 'react-icons/bs';

const PlayButton: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlerClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };
  return (
    <div className={`style.video_content_${isPlaying ? 'playing' : 'stopped'}}`}>
      <button className={style.play_button} onClick={handlerClick}>
        <h2>{isPlaying ? <BsStop /> : <BsPlay />}</h2>
      </button>
      <video
        className={style.video}
        ref={videoRef}
        src='/video/SiuuCr7.mp4'
        controls={false}
      ></video>
    </div>
  );
};

export default PlayButton;
