import React from 'react';
import s from './Question.module.css';
import birdPhoto from '../../assets/image/bird.jpg';
import AudioPlayer from '../common/AudioPlayer';
import { BirdsDataElemType } from '../../types/types';
import BirdsImage from '../common/BirdsImage/BirdsImage';

type PropsType = {
  birdsData: null | Array<BirdsDataElemType>
  questionId: number
  isResponse: null | boolean
}

const Question: React.FC<PropsType> = ({birdsData, questionId, isResponse}) => {
  
  const randomNumber = questionId - 1;
  return (
    <div className={s.quest}>
      <BirdsImage photo = { isResponse && birdsData ? birdsData[randomNumber].image : birdPhoto } />
      <div className={s.questControl}>
      <span className={s.questSpan}>{ isResponse && birdsData ? birdsData[randomNumber].name : '*****'}</span>
        <hr />
        <AudioPlayer isResponse={isResponse} audio={ birdsData ? birdsData[randomNumber].audio: '' } />
      </div>
    </div>
  )
}


export default Question;
