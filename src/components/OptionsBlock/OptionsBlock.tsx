import React from 'react';
import s from './OptionsBlock.module.css';
import OptionsItem from './OptionsItem/OptionsItem';
import { BirdsDataElemType } from '../../types/types';

type PropsType = {
  currentBirds: null | Array<BirdsDataElemType>,
  isResponse: null | boolean
  setOptions: (id: number) => void
  setCounterScore: (id: number) => void
  optionsId: Array<number>
  questionId: number
  right: null | {load: () => void, play: () => void}
  wrong: null | {load: () => void, play: () => void}
}

const OptionsBlock: React.FC<PropsType> = ({currentBirds, isResponse, setOptions, setCounterScore, optionsId, questionId, right, wrong}) => {

  const options = currentBirds && currentBirds.map((b) => <OptionsItem id={`${b.id}`}
                                          setOptions={setOptions}
                                          key={b.id}
                                          name={b.name}
                                          isResponse={isResponse}
                                          setCounterScore={setCounterScore}
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
