import React from 'react';
import s from './Answer.module.css';

const Answer = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.choose}>
        Послушайте плеер. <br/>
        Выберите птицу из списка
      </p>
    </div>
  )
}

export default Answer;
