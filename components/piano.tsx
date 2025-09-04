import style from '../styles/Piano.module.css';
import React, { FC } from 'react';

import PianoKey from '@/components/PianoKey';

const Piano: FC = () => {
  return (
    <div className={style.piano_complete}>
      <div className={style.piano_key_white}>
        <PianoKey color={style.white} soundSrc='C5' />
        <PianoKey color={style.white} soundSrc='D5' />
        <PianoKey color={style.white} soundSrc='E5' />
        <PianoKey color={style.white} soundSrc='F5' />
        <PianoKey color={style.white} soundSrc='G5' />
        <PianoKey color={style.white} soundSrc='A5' />
        <PianoKey color={style.white} soundSrc='B5' />
        <PianoKey color={style.white} soundSrc='C6' />
        <PianoKey color={style.white} soundSrc='D' />
        <PianoKey color={style.white} soundSrc='E' />
        <PianoKey color={style.white} soundSrc='F' />
        <PianoKey color={style.white} soundSrc='G' />
        <PianoKey color={style.white} soundSrc='A' />
        <PianoKey color={style.white} soundSrc='B' />
      </div>
      <div className={style.piano_key_black}>
        <PianoKey soundSrc='Db5' color={style.black} />
        <PianoKey soundSrc='Eb5' color={style.black} />
        <div className={style.space}></div>
        <PianoKey soundSrc='Gb5' color={style.black} />
        <PianoKey soundSrc='Ab5' color={style.black} />
        <PianoKey soundSrc='Bb5' color={style.black} />
        <div className={style.space}></div>
        <PianoKey soundSrc='Db' color={style.black} />
        <PianoKey soundSrc='Eb' color={style.black} />
        <div className={style.space}></div>
        <PianoKey soundSrc='Gb' color={style.black} />
        <PianoKey soundSrc='Ab' color={style.black} />
        <PianoKey soundSrc='Bb' color={style.black} />
      </div>
    </div>
  );
};

export default Piano;
