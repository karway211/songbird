import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { AppStateType } from '../../redux/redux-store';

type MapPropsType = ReturnType<typeof mapStateToProps>

const HeaderContainer: React.FC<MapPropsType> = ({score}) => {
  return <Header score={score} />
}

const mapStateToProps = (state: AppStateType) => ({
  score: state.songbirdBlock.score
})

export default connect(mapStateToProps, {})(HeaderContainer);
