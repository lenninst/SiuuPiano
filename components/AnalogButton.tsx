import React, {FC, useState} from "react";
import style from '/styles/Buttons.module.css';
import Image from "next/image";
import PianoKey from "@/components/PianoKey";
import {Howl} from "howler";

interface buttons {
  photo: string;
  buttonSound: string;



}
const AnalogButton:FC<buttons> = ({photo, buttonSound}) => {
  const [isPlaying, setIsplaying] = useState(false);

  const sound = new Howl({
    src: [`sounds/${buttonSound}.wav`]
  });

  const handlerButton = () => {
    sound.play();
    setIsplaying(true);
  }

  const stopSound = () => {
    sound.stop();
    setIsplaying(false);
  }



  return(
      <div className={style.button_elements_content} onMouseDown={handlerButton} onMouseUp={stopSound}>
        <div className={style.button_circle}>
            <div className={style.button_icon} >
              <Image
                  src={photo}
                  alt="imagen"
                  width={100}
                  height={100}></Image>
            </div>

        </div>
      </div>
  )
}
export default AnalogButton;
