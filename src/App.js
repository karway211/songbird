import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Question/Question';
import Choice from './components/Choice/Choice';
import Answer from './components/Answer/Answer';
import Next from './components/Next/Next';
import { startGame } from './redux/songbird-reducer';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';

const App = ({startGame}) => {
  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <Question />
      <div className='wrap'>
        <Choice />
        <Answer />
      </div>
      <Next />
    </div>
  );
}

export default connect(null, {startGame})(App);
