import React, { FC } from 'react';
import style from 'styles/InterfacePiano.module.css';
import Piano from '@/components/piano';
import AnalogButton from '@/components/AnalogButton';
import PlayButton from '@/components/PlayButton';

const InterfacePiano: FC = () => {
  return (
    <div className={style.piano_main_content}>
      <h1 className={style.title}></h1>
      <div className={style.Interface_piano}>
        <div className={style.piano_elements_content}>
          <div className={style.rows_up}>
            <div className={style.parlante}></div>
            <div className={style.control_panel}>
              <div className={style.circle_animation}></div>
              <div className={style.circle_animation}></div>
            </div>
            <div className={style.button_content}>
              <AnalogButton photo='line1.svg' buttonSound='navidad'></AnalogButton>
              <AnalogButton photo='patt2.svg' buttonSound='boda'></AnalogButton>
              <AnalogButton photo='patt3.svg' buttonSound='cumple'></AnalogButton>
            </div>
          </div>
          <div className={style.rows_down}>
            <div className={style.second_controls}>
              <PlayButton />
            </div>

            <Piano />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InterfacePiano;
