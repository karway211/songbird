import React from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {
  const navItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  const navItemsLinc = navItems.map((n, i) => {
      return <div className={s.navBth} id={i+1} key={i+1}>{ n }</div>
  })
  return (
    <div className={s.navWrapper}>
      {navItemsLinc}
    </div>
  )
}

export default Navbar;
