import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src="https://birds-quiz.netlify.com/static/media/logo.4f82cd73.svg" className={s.logoImg} alt="logo"/>
      </div>
      <div className={s.score}>
        <span>Score: 0</span>
      </div>
    </div>
  )
}

export default Header;
