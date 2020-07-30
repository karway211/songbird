import React from 'react';
import s from './OptionsBlock.module.css';
import { NavLink } from 'react-router-dom';

const OptionsItem = ({setOptions, setCounterScore, id, isResponse, name }) => {

  const coincide = (e) => {
    setOptions(e.target.id);
    setCounterScore();
  }

  return (
    <div className={s.choiceList}>
      <NavLink
        onClick={coincide}
        to={`/${id}`}
        activeClassName={`${isResponse ? s.activeGold : s.activeRed}`}
        id={id}
        className={s.listItem}>{name}</NavLink>
    </div>
  )
}

const OptionsBlock = ({birds, isResponse, isNext, setOptions, setCounterScore}) => {

  const options = birds && birds.map((b) => <OptionsItem id={b.id}
                                          setOptions={setOptions}
                                          key={b.id}
                                          name={b.name}
                                          isResponse={isResponse}
                                          setCounterScore={setCounterScore}
                                          isNext={isNext} />);

  return (
    <div className={s.answerOptions}>
        { options }
    </div>
  );
}

export default OptionsBlock;
