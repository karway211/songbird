import React from 'react';
import Next from './Next';
import { connect } from 'react-redux';

const NextContainer = (props) => {
  return <Next {...props} />
}

const mapStateToProps = (state) => ({
  isNext: state.songbirdBlock.isNext,
})

export default connect(mapStateToProps, {})(NextContainer);
