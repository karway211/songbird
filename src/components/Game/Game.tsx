import React from 'react';
import QuestionContainer from '../Question/QuestionContainer';
import OptionsBlockContainer from '../OptionsBlock/OptionsBlockContainer';
import AnswerContainer from '../Answer/AnswerContainer';

const Game: React.FC = () => {

  return (
    <div className="Game">
      <QuestionContainer />
      <div className='wrap'>
        <OptionsBlockContainer />
        <AnswerContainer />
      </div>
    </div>
  );
}

export default Game;
