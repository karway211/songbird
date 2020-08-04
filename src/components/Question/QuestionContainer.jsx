import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';

const QuestionContainer = (props) => {
  return <Question {...props} />
}

const mapStateToProps = (state) => ({
  birdsData: state.songbirdBlock.currentBirds,
  isResponse: state.songbirdBlock.isResponse,
  questionId: state.songbirdBlock.questionId
})

export default connect(mapStateToProps, {})(QuestionContainer);
