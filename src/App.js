import React, { useEffect } from 'react';
import './App.css';
import Choice from './components/Choice/Choice';
import Answer from './components/Answer/Answer';
import Next from './components/Next/Next';
import { startGame } from './redux/songbird-reducer';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import QuestionContainer from './components/Question/QuestionContainer';

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
        <Choice />
        <Answer />
      </div>
      <Next />
    </div>
  );
}

export default connect(null, {startGame})(App);
