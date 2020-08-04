import React from 'react';
import s from './OptionsBlock.module.css';
import { NavLink } from 'react-router-dom';

const OptionsItem = ({setOptions, setCounterScore, id, isResponse, name, questionId, optionsId, wrong, right }) => {

  const coincide = (e) => {
    setOptions(e.target.id);
    setCounterScore(e.target.id);
    if (!isResponse) {
      right.load();
      wrong.load();
      questionId === id && right.play();
      questionId !== id && wrong.play();
    }
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
        to={`/game/${id}`}
        className={`${s.listItem} ${optionActiveStyle}`}
        id={id}>{name}</NavLink>
    </div>
  )
}

const OptionsBlock = ({currentBirds, isResponse, setOptions, setCounterScore, optionId, optionsId, questionId, right, wrong}) => {

  const options = currentBirds && currentBirds.map((b) => <OptionsItem id={b.id}
                                          setOptions={setOptions}
                                          key={b.id}
                                          name={b.name}
                                          isResponse={isResponse}
                                          setCounterScore={setCounterScore}
                                          optionId={optionId}
                                          optionsId={optionsId}
                                          questionId={questionId}
                                          right={right}
                                          wrong={wrong} />);

  return (
    <div className={s.answerOptions}>
        { options }
    </div>
  );
}

export default OptionsBlock;
