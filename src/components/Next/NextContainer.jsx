import React from 'react';
import Next from './Next';
import { connect } from 'react-redux';
import { setOptions, nextLevelAC } from '../../redux/songbird-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const NextContainer = (props) => {
  return <Next {...props} />
}

const mapStateToProps = (state) => ({
  isNext: state.songbirdBlock.isNext,
  optionId: state.songbirdBlock.optionId,
})

export default compose(
  connect(mapStateToProps, {setOptions, nextLevelAC}),
  withRouter,
)(NextContainer);
