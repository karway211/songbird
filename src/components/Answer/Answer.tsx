import React from 'react';
import s from './Answer.module.css';
import AudioPlayer from '../common/AudioPlayer';
import { BirdsDataElemType } from '../../types/types';
import BirdsImage from '../common/BirdsImage/BirdsImage';

type PropsType = {
  optionId: null | number
  currentBirds: Array<BirdsDataElemType> | null
}

const Answer: React.FC<PropsType> = ({ optionId, currentBirds }) => {
  if (optionId && currentBirds) {
    const currentData = currentBirds[optionId - 1]
    return (
      <div className={s.wrapper}>
        <div className={s.answer}>
          <div className={s.imageBlock}>
            <BirdsImage photo = {currentData.image} />
          </div>
          <div className={s.answerControl}>
            <span className={s.questSpan}>{currentData.name}</span>
            <hr />
            <span className={s.questSpan}>{currentData.species}</span>
            <hr />
            <AudioPlayer audio={currentData.audio} />
          </div>
        </div>
        <p className={s.description}>{currentData.description}</p>
      </div>
    );
  } else {
    return (
      <div className={s.wrapper}>
        <p className={s.choose}>
            { `Послушайте плеер. Выберите птицу из списка`}
        </p>
      </div>
    )
  }
}

export default Answer;
