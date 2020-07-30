import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Question/Question';
import Choice from './components/Choice/Choice';
import Answer from './components/Answer/Answer';
import Next from './components/Next/Next';
import { startGame } from './redux/songbird-reducer';
import { connect } from 'react-redux';

const App = ({startGame}) => {
  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <div className="App">
      <Header />
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
