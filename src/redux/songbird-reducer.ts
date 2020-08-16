import { InferActionsTypes } from './redux-store';
import { BirdsDataElemType } from './../types/types';
import { birdsDataType } from './../api/api';
import birdsData from "../api/api";
import { Dispatch } from 'react';
// import audioRight from '../assets/sounds/Sound_right.mp3';
// import audioWrong from '../assets/sounds/Sound_wrong.mp3';
const audioRight = require('../assets/sounds/Sound_right.mp3');
const audioWrong = require('../assets/sounds/Sound_wrong.mp3');

const initialState = {
  counter: 0 as number,
  score: 0 as number,
  birds: null as null | birdsDataType,
  currentBirds: null as null | Array<BirdsDataElemType>,
  optionId: null as null | number,
  optionsId: [] as Array<number>,
  isChangeOptions: null as null | boolean,
  questionId: Math.floor(Math.random() * 5) + 1 as number,
  isResponse: null as null | boolean,
  counterScore: 5 as number,
  navigations: ['Воробьинообразные', 'Курообразные', 'Гусеобразные', 'Аистообразные', 'Совообразные', 'Соколообразные'] as Array<string>,
  right: null as null | {load: () => void, play: () => void},
  wrong:  null as null | {load: () => void, play: () => void}
}

const songbirdReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch(action.type) {
    case 'START_GAME_STATE': {
      return {
        ...state,
        birds: action.startData.birds,
        currentBirds: action.startData.birds && action.startData.birds[state.counter],
        right: action.startData.right,
        wrong: action.startData.wrong,
      }
    }
    case 'SET_OPTIONS': {
      return {
        ...state,
        optionId: +action.id,
        optionsId: (!state.optionsId.includes(+action.id) && !state.isResponse && [...state.optionsId, +action.id]) || [...state.optionsId],
        isChangeOptions: state.optionsId.includes(+action.id) ? false : true,
        isResponse: state.questionId === +action.id || state.isResponse ? true : false,
      }
    }
    case 'SET_COUNTER_SCORE': {
      return {
        ...state,
        counterScore: (!state.isResponse && state.counterScore > 0 && state.isChangeOptions )
                      ? state.counterScore - 1 : !state.isResponse
                      ? state.counterScore : 0,
        score: (state.isResponse && state.score + state.counterScore) || state.score,
      }
    }
    case 'NEXT_LEVEL_AC': {
      if(state.counter < 5) {
        return {
          ...state,
          counter: state.counter + 1,
          currentBirds: state.birds && state.birds[state.counter + 1],
          questionId: Math.floor(Math.random() * 5) + 1,
          isResponse: null,
          score: state.score,
          counterScore: 5,
          optionsId: [],
          optionId: null,
          isChangeOptions: null,
        }
      } else if(state.counter === 5) {
        return {
          ...state,
          counter: state.counter + 1,
        }
      } else {
        return {
          ...state,
          counter: 0,
          currentBirds: state.birds && state.birds[0],
          questionId: Math.floor(Math.random() * 5) + 1,
          isResponse: null,
          score: 0,
          counterScore: 5,
          optionsId: [],
          optionId: null,
          isChangeOptions: null,
        }
      }
    }
    default: {
      return state;
    }
  }
}

//ac
export const actions = {
  startGameState: (birds: null | birdsDataType, right: null | {load: () => void, play: () => void}, wrong: null | {load: () => void, play: () => void}) => (
    {type: 'START_GAME_STATE', startData: {birds, right, wrong}} as const),
  setOptions: (id: number) => ({type: 'SET_OPTIONS', id} as const),
  setCounterScore: (id: number) => ({type: 'SET_COUNTER_SCORE', id} as const),
  nextLevelAC: () => ({type: 'NEXT_LEVEL_AC'} as const),
}

//thunk

export const startGame = () => {
  return (dispatch: Dispatch<ActionsType>) => {
    dispatch(actions.startGameState(birdsData, new Audio(audioRight), new Audio(audioWrong)));
  }
}

type ActionsType = InferActionsTypes<typeof actions>;
type InitialStateType = typeof initialState;

export default songbirdReducer;
