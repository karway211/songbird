import React from 'react';
import s from './Next.module.css';
import { NavLink } from 'react-router-dom';

const Next = ({isNext}) => {
  return <NavLink to={'/1'} className={ isNext ? `${s.nextBth} ${s.action}` : s.nextBth }>Next Level</NavLink>
}

export default Next;
