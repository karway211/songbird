import React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

type MapPropsType = ReturnType<typeof mapStateToProps>

const QuestionContainer: React.FC<MapPropsType> = (props) => {
  return <Question {...props} />
}

const mapStateToProps = (state: AppStateType) => ({
  birdsData: state.songbirdBlock.currentBirds,
  isResponse: state.songbirdBlock.isResponse,
  questionId: state.songbirdBlock.questionId
})

export default connect(mapStateToProps, {})(QuestionContainer);
