import React, { useEffect } from 'react';
import './App.css';
import { startGame } from './redux/songbird-reducer';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import QuestionContainer from './components/Question/QuestionContainer';
import NextContainer from './components/Next/NextContainer';
import AnswerContainer from './components/Answer/AnswerContainer';
import OptionsBlockContainer from './components/OptionsBlock/OptionsBlockContainer';

const App = ({startGame}) => {
  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="App">
      <HeaderContainer />
      <NavbarContainer />
      <QuestionContainer />
      <div className='wrap'>
        <OptionsBlockContainer />
        <AnswerContainer />
      </div>
      <NextContainer />
    </div>
  );
}

export default connect(null, {startGame})(App);
