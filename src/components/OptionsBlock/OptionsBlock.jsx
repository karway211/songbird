import React from 'react';
import s from './OptionsBlock.module.css';
import { NavLink } from 'react-router-dom';

const OptionsItem = ({setOptions, setCounterScore, id, isResponse, name, questionId, optionsId }) => {

  const coincide = (e) => {
    setOptions(e.target.id);
    setCounterScore(e.target.id);
  }
  let optionActiveStyle;
  if(questionId === id && optionsId.includes(id)) {
    optionActiveStyle = `${s.listItem} ${s.activeGold}`;
  } else if (questionId !== id && optionsId.includes(id)) {
    optionActiveStyle = `${s.listItem} ${s.activeRed}`;
  } 

  return (
    <div className={s.choiceList}>
      <NavLink
        onClick={coincide}
        to={`/${id}`}
        className={`${s.listItem} ${optionActiveStyle}`}
        id={id}>{name}</NavLink>
    </div>
  )
}

const OptionsBlock = ({birds, isResponse, isNext, setOptions, setCounterScore, optionId, optionsId, questionId}) => {

  const options = birds && birds.map((b) => <OptionsItem id={b.id}
                                          setOptions={setOptions}
                                          key={b.id}
                                          name={b.name}
                                          isResponse={isResponse}
                                          setCounterScore={setCounterScore}
                                          optionId={optionId}
                                          optionsId={optionsId}
                                          questionId={questionId}
                                          isNext={isNext} />);

  return (
    <div className={s.answerOptions}>
        { options }
    </div>
  );
}

export default OptionsBlock;
