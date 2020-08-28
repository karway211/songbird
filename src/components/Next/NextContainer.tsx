import React from 'react';
import Next from './Next';
import { connect } from 'react-redux';
import { actions } from '../../redux/songbird-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => ({
  isResponse: state.songbirdBlock.isResponse,
  optionId: state.songbirdBlock.optionId,
  counter: state.songbirdBlock.counter,
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, {...actions}),
  withRouter,
)(Next);
