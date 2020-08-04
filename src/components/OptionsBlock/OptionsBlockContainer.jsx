import React from 'react';
import { connect } from 'react-redux';
import { setOptions, setCounterScore } from '../../redux/songbird-reducer';
import OptionsBlock from './OptionsBlock';

const OptionsBlockContainer = (props) => {
  return <OptionsBlock {...props} />
}

const mapStateToProps = state => ({
  currentBirds: state.songbirdBlock.currentBirds,
  isResponse: state.songbirdBlock.isResponse,
  optionId: state.songbirdBlock.optionId,
  questionId: state.songbirdBlock.questionId,
  optionsId: state.songbirdBlock.optionsId,
  wrong: state.songbirdBlock.wrong,
  right: state.songbirdBlock.right,
  
})

export default connect(mapStateToProps, {setOptions, setCounterScore})(OptionsBlockContainer);
