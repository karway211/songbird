// import React from 'react';
import { connect } from 'react-redux';
import OptionsBlock from './OptionsBlock';
import { actions } from '../../redux/songbird-reducer';
import { AppStateType } from '../../redux/redux-store';

// const OptionsBlockContainer = (props) => {
//   return <OptionsBlock {...props} />
// }

const mapStateToProps = (state: AppStateType) => ({
  currentBirds: state.songbirdBlock.currentBirds,
  isResponse: state.songbirdBlock.isResponse,
  questionId: state.songbirdBlock.questionId,
  optionsId: state.songbirdBlock.optionsId,
  wrong: state.songbirdBlock.wrong,
  right: state.songbirdBlock.right,
  
})

export default connect(mapStateToProps, {...actions})(OptionsBlock);
