import React from 'react';
import s from './Choice.module.css';
import { NavLink } from 'react-router-dom';

const ChoiceItem = () => {
  return (
    <div className={s.choiceList}>
      <NavLink to={`/1`} className={s.listItem}>name</NavLink>
    </div>
  )
}

const Choice = () => {

  return (
    <div className={s.answerOptions}>
        <ChoiceItem />
        <ChoiceItem />
        <ChoiceItem />
        <ChoiceItem />
        <ChoiceItem />
        <ChoiceItem />
    </div>
  );
}

export default Choice;
