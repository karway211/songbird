import React from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const HeaderContainer = ({score}) => {
  return <Header score={score} />
}

const mapStateToProps = (state) => ({
  score: state.songbirdBlock.score
})

export default connect(mapStateToProps, {})(HeaderContainer);
