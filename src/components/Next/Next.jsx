import React from 'react';
import s from './Next.module.css';
import { NavLink } from 'react-router-dom';

const Next = (props) => {
  
  return <NavLink to={'/1'} className={s.nextBth}>Next Level </NavLink>
}

export default Next;
