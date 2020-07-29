import React from 'react';
import s from './QuestionImage.module.css';

const QuestionImage = (props) => {
  return (
    <div className={s.image}>
      <img src={props.photo} className={s.imageImg} alt='bird'/>
    </div>
  );
};

export default QuestionImage;