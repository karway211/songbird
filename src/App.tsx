import React, { useEffect } from 'react';
import './App.css';
import { startGame } from './redux/songbird-reducer';
import { connect } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import NextContainer from './components/Next/NextContainer';
import Game from './components/Game/Game';
import { Route, withRouter } from 'react-router-dom';
import Winner from './components/Winner/Winner';
import { compose } from 'redux';

type DispatchPropsType = {
  startGame: () => void,
  location: {
    pathname: string
  },
  history: {
    push: (a: string) => void
  }
}

const App: React.FC<DispatchPropsType> = ({startGame, location, history }) => {

  useEffect(() => {
    startGame();
    location.pathname === '/' && history.push('/game')
  }, [startGame, history, location]);

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

export default compose<React.ComponentType>(connect(null, {startGame}), withRouter)(App);
