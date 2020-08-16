import React from 'react';
import { connect } from 'react-redux';
import Answer from './Answer';
import { AppStateType } from '../../redux/redux-store';

type MapPropsType = ReturnType<typeof mapStateToProps>

const AnswerContainer: React.FC<MapPropsType> = (props) => {
  return <Answer {...props} />
}

const mapStateToProps = (state: AppStateType) => ({
  currentBirds: state.songbirdBlock.currentBirds,
  optionId: state.songbirdBlock.optionId,
  counter: state.songbirdBlock.counter,
  score: state.songbirdBlock.score
})

export default connect(mapStateToProps, {})(AnswerContainer);
