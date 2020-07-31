import React from 'react';
import s from './Next.module.css';
import { NavLink } from 'react-router-dom';

const Next = ({isNext, location, setOptions, nextLevelAC}) => {
  console.log(location.pathname);
  const nextLevel = () => {
    if(isNext) {
      nextLevelAC();
      setOptions(null);
    }
  }
  return <NavLink 
            to={isNext ? '/' : `${location.pathname}`}
            className={isNext ? `${s.nextBth} ${s.action}` : s.nextBth }
            onClick={nextLevel}>Next Level </NavLink>
}

export default Next;
