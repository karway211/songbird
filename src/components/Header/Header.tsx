import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/image/logo.svg';

type PropsType = {
  score: number
}

const Header: React.FC<PropsType> = ({score}) => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={logo} className={s.logoImg} alt="logo"/>
      </div>
      <div className={s.score}>
        <span>Score: {score}</span>
      </div>
    </div>
  )
}

export default Header;
