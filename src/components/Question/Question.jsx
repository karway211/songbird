import React from 'react';
import s from './Question.module.css';
import QuestionImage from './QuestionImage/QuestionImage';

const Question = (props) => {

  return (
    <div className={s.quest}>
      <QuestionImage photo = {'https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg'} />
      <div className={s.questControl}>
      <span className={s.questSpan}>{'-----'}</span>
        <hr />
        <audio src='' controls className={s.questAudio}></audio>
      </div>
    </div>
  )
}

export default Question;
