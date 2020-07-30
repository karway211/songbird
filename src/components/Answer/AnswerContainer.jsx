import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';

const AnswerContainer = (props) => {
  return <Answer {...props} />
}

const mapStateToProps = state => ({
  birds: state.songbirdBlock.birds,
  optionId: state.songbirdBlock.optionId,
  counter: state.songbirdBlock.counter,
  score: state.songbirdBlock.score
})

export default connect(mapStateToProps, {})(AnswerContainer);
