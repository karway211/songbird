import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';

const NavbarContainer = (props) => {
  return <Navbar {...props} />
}

const mapStateToProps = (state) => ({
  counter: state.songbirdBlock.counter,
  navItems: state.songbirdBlock.navigations,
})

export default connect(mapStateToProps, {})(NavbarContainer);
