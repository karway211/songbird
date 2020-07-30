import React from 'react';
import s from './Answer.module.css';
import QuestionImage from '../Question/QuestionImage/QuestionImage';

// const Answer = ({}) => {
//   return (
//     <div className={s.wrapper}>
//       <p className={s.choose}>
//         Послушайте плеер. <br/>
//         Выберите птицу из списка
//       </p>
//     </div>
//   )
// }



const Answer = ({ optionId, birds, counter, score }) => {
  if (optionId) {
    const currentData = birds[optionId - 1]
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
            <audio src={currentData.audio} controls className={s.questAudio}></audio>
          </div>
        </div>
        <p className={s.description}>{currentData.description}</p>
      </div>
    );
  } else {
    return (
      <div className={s.wrapper}>
        <p className={s.choose}>
          {counter === 6
            ? `Вы набрали ${score} из 36 баллов,
              кликните кнопку 'Next Level' чтобы начать игру сначала`
            : 'Выберите один из вариантов ответа'}
        </p>
      </div>
    )
  }
}

export default Answer;
