import React from 'react';
import s from './Next.module.css';
import { NavLink } from 'react-router-dom';

const Next = ({isResponse, location, setOptions, nextLevelAC, counter}) => {

  const nextLevel = () => {
    console.log(location.pathname);
    if(isResponse) {
      nextLevelAC();
      setOptions(null);
    }
  }
  return (
  <NavLink to={counter===5 ? '/end' : isResponse ? '/game' : `${location.pathname}`}
            className={isResponse ? `${s.nextBth} ${s.action}` : s.nextBth }
            onClick={nextLevel}>{counter === 6 ? 'Try again' : 'Next Level'} </NavLink>
            )
}

export default Next;
