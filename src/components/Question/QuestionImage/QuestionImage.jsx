import React from 'react';
import s from './QuestionImage.module.css';

const QuestionImage = ({photo}) => {
  return (
    <div className={s.image}>
      <img src={photo} className={s.imageImg} alt='bird'/>
    </div>
  );
};

export default QuestionImage;