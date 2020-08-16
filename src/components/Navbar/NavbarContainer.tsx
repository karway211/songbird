import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { AppStateType } from '../../redux/redux-store';

type MapPropsType = ReturnType<typeof mapStateToProps>

const NavbarContainer: React.FC<MapPropsType> = (props) => {
  return <Navbar {...props} />
}

const mapStateToProps = (state: AppStateType) => ({
  counter: state.songbirdBlock.counter,
  navItems: state.songbirdBlock.navigations,
})

export default connect(mapStateToProps, {})(NavbarContainer);
