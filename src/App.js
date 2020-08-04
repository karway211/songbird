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
import Game from './components/Game/Game';
import { Route, withRouter } from 'react-router-dom';
import Winner from './components/Winner/Winner';
import { compose } from 'redux';

const App = ({startGame, location, ...props}) => {

  useEffect(() => {
    startGame();
    location.pathname === '/' && props.history.push('/game')
  }, [startGame, props.history,location]);

  return (
    <div className="App">
      <HeaderContainer />
      <NavbarContainer />
      {/* <QuestionContainer />
      <div className='wrap'>
        <OptionsBlockContainer />
        <AnswerContainer />
      </div> */}
      <Route path='/game' render={() => <Game /> }/>
      <Route path='/end' render={() => <Winner /> }/>
      
      <NextContainer />
    </div>
  );
}

export default compose(connect(null, {startGame}), withRouter)(App);
