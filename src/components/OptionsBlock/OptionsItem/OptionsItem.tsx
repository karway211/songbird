import React from 'react';
import s from '../OptionsBlock.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
  setOptions: (id: number) => void
  setCounterScore: (id: number) => void
  isResponse: null | boolean
  questionId: number
  optionsId: Array<number>
  right: null | {load: () => void, play: () => void}
  wrong: null | {load: () => void, play: () => void}
  id: string
  name: string
}

const OptionsItem: React.FC<PropsType> = ({setOptions, setCounterScore, id, isResponse, name, questionId, optionsId, wrong, right }) => {

  const coincide = (e: any) => {
    setOptions(e.target.id);
    setCounterScore(e.target.id);
    if (!isResponse && right && wrong) {
      right.load();
      wrong.load();
      questionId === +id && right.play();
      questionId !== +id && wrong.play();
    }
  }
  
  let optionActiveStyle;
  let optionActiveMarkerStyle;
  if(questionId === +id && optionsId.includes(+id)) {
    optionActiveStyle = `${s.listItem} ${s.activeGold}`;
    optionActiveMarkerStyle = `${s.marker} ${s.activeMarkerGold}`
  } else if (questionId !== +id && optionsId.includes(+id)) {
    optionActiveStyle = `${s.listItem} ${s.activeRed}`;
    optionActiveMarkerStyle = `${s.marker} ${s.activeMarkerRed}`;
  }

  return (
    <div className={s.choiceList}>
      <div className={`${s.marker} ${optionActiveMarkerStyle}`}></div>
      <NavLink
        onClick={coincide}
        to={`/game/${id}`}
        className={`${s.listItem} ${optionActiveStyle}`}
        id={id}>{name}</NavLink>
    </div>
  )
}

export default OptionsItem;
