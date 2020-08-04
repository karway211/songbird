import React from 'react';
import s from './Question.module.css';
import QuestionImage from './QuestionImage/QuestionImage';
import birdPhoto from '../../assets/image/bird.jpg';
import AudioPlayer from '../common/AudioPlayer';

const Question = ({birdsData, questionId, isResponse}) => {
  
  const randomNumber = questionId - 1;
  return (
    <div className={s.quest}>
      <QuestionImage photo = { isResponse && birdsData ? birdsData[randomNumber].image : birdPhoto } />
      <div className={s.questControl}>
      <span className={s.questSpan}>{ isResponse && birdsData ? birdsData[randomNumber].name : '-----'}</span>
        <hr />
        {/* <audio src={ birdsData && birdsData[randomNumber].audio } controls className={s.questAudio}></audio> */}
        <AudioPlayer isResponse={isResponse} audio={ birdsData && birdsData[randomNumber].audio } />
      </div>
    </div>
  )
}


export default Question;
