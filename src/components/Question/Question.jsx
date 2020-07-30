import React from 'react';
import s from './Question.module.css';
import QuestionImage from './QuestionImage/QuestionImage';
import birdPhoto from '../../assets/image/bird.jpg';

const Question = ({birdsData, questionId, isNext}) => {
  
  console.log(birdPhoto);
  const randomNumber = questionId - 1;
  return (
    <div className={s.quest}>
      <QuestionImage photo = { isNext && birdsData ? birdsData[randomNumber].image : birdPhoto } />
      <div className={s.questControl}>
      <span className={s.questSpan}>{ isNext && birdsData ? birdsData[randomNumber].name : '-----'}</span>
        <hr />
        <audio src={ birdsData && birdsData[randomNumber].audio } controls className={s.questAudio}></audio>
      </div>
    </div>
  )
}


export default Question;
