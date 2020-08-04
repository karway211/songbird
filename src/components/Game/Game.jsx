import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import QuestionContainer from '../Question/QuestionContainer';
import OptionsBlockContainer from '../OptionsBlock/OptionsBlockContainer';
import AnswerContainer from '../Answer/AnswerContainer';

const Game = () => {

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
