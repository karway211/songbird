import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';

const QuestionContainer = (props) => {
  return <Question {...props} />
}

const mapStateToProps = (state) => ({
  birdsData: state.songbirdBlock.birds,
  isNext: state.songbirdBlock.isNext,
  // optionId: state.songbirdBlock.optionId,
  questionId: state.songbirdBlock.questionId
})

export default connect(mapStateToProps, {})(QuestionContainer);
