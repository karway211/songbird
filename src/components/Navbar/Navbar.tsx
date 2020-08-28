import React from 'react';
import s from './Navbar.module.css';

type PropsType = {
  counter: number,
  navItems: Array<string>
}

const Navbar: React.FC<PropsType> = ({counter, navItems}) => {

  const navItemsLinc = navItems.map((n, i) => {
    if (i === counter) {
      return <div className={`${s.navBth} ${s.active}`} id={`${i+1}`} key={i+1}>{ n }</div>
    } else {
      return <div className={s.navBth} id={`${i+1}`} key={i+1}>{ n }</div>
    }
  })
  return (
    <div className={s.navWrapper}>
      {navItemsLinc}
    </div>
  )
}

export default Navbar;
