import birdsData from "../api/api";

const initialState = {
  counter: 0,
  birds: null,
  isNext: false,
  optionId: null,
  questionId: Math.floor(Math.random() * 5) + 1,
  isResponse: null,
  score: 0,
  counterScore: 5,
  navigations: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
}

const songbirdReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME_STATE': {
      return {
        ...state,
        birds: action.birds[state.counter],
      }
    }
    case 'SET_OPTIONS': {
      return {
        ...state,
        optionId: +action.id,
        isResponse: state.questionId === +action.id || state.isResponse ? true : false,
        isNext: state.questionId === +action.id || state.isResponse ? true : false,
      }
    }
    case 'SET_COUNTER_SCORE': {
      return {
        ...state,
        counterScore: (!state.isNext && state.counterScore > 1 && state.counterScore - 1) || (!state.isNext && state.counterScore),
        score: (state.isNext && state.score + state.counterScore) || state.score,
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
export const setCounterScore = () => ({type: 'SET_COUNTER_SCORE'});

//thunk

export const startGame = () => {
  return dispatch => {
    dispatch(startGameState(birdsData));
  }
}

export default songbirdReducer;
