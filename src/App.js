import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Question/Question';
import Choice from './components/Choice/Choice';
import Answer from './components/Answer/Answer';
import Next from './components/Next/Next';

const App = () => {
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

export default App;
