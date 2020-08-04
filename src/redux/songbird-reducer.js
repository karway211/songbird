import birdsData from "../api/api";
import audioRight from '../assets/sounds/Sound_right.mp3';
import audioWrong from '../assets/sounds/Sound_wrong.mp3';

const initialState = {
  counter: 0,
  score: 0,
  birds: null,
  currentBirds: null,
  optionId: null,
  optionsId: [],
  isChangeOptions: null,
  questionId: Math.floor(Math.random() * 5) + 1,
  isResponse: null,
  counterScore: 5,
  navigations: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
  right: new Audio(audioRight),
  wrong: new Audio(audioWrong),
}

const songbirdReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME_STATE': {
      return {
        ...state,
        birds: action.birds,
        currentBirds: action.birds[state.counter],
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
          currentBirds: state.birds[state.counter + 1],
          choiceId: null,
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
          currentBirds: state.birds[0],
          choiceId: null,
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
const startGameState = (birds) => ({type: 'START_GAME_STATE', birds});
export const setOptions = (id) => ({type: 'SET_OPTIONS', id});
export const setCounterScore = (id) => ({type: 'SET_COUNTER_SCORE', id});
export const nextLevelAC = () => ({type: 'NEXT_LEVEL_AC'});

//thunk

export const startGame = () => {
  return dispatch => {
    dispatch(startGameState(birdsData));
  }
}

export default songbirdReducer;
