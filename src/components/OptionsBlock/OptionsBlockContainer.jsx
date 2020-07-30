import React from 'react';
import { connect } from 'react-redux';
import { setOptions, setCounterScore } from '../../redux/songbird-reducer';
import OptionsBlock from './OptionsBlock';

const OptionsBlockContainer = (props) => {
  return <OptionsBlock {...props} />
}

const mapStateToProps = state => ({
  birds: state.songbirdBlock.birds,
  isResponse: state.songbirdBlock.isResponse,
  isNext: state.songbirdBlock.isNext
})

export default connect(mapStateToProps, {setOptions, setCounterScore})(OptionsBlockContainer);
