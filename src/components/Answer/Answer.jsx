import React from 'react';
import s from './Answer.module.css';
import QuestionImage from '../Question/QuestionImage/QuestionImage';
import AudioPlayer from '../common/AudioPlayer';

const Answer = ({ optionId, currentBirds, counter, score }) => {
  if (optionId) {
    const currentData = currentBirds[optionId - 1]
    return (
      <div className={s.wrapper}>
        <div className={s.answer}>
          <div className={s.imageBlock}>
            <QuestionImage photo = {currentData.image} />
          </div>
          <div className={s.answerControl}>
            <span className={s.questSpan}>{currentData.name}</span>
            <hr />
            <span className={s.questSpan}>{currentData.species}</span>
            <hr />
            {/* <audio src={currentData.audio} controls className={s.questAudio}></audio> */}
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
          {/* {counter === 6
            ? `Вы набрали ${score} из 30 баллов,
              кликните кнопку 'Next Level' чтобы начать игру сначала`
            : `Послушайте плеер. Выберите птицу из списка`} */}
            { `Послушайте плеер. Выберите птицу из списка`}
        </p>
      </div>
    )
  }
}

export default Answer;
