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
        counterScore: (!state.isNext && state.counterScore > 0) ? state.counterScore - 1 : !state.isNext ? state.counterScore : 0,
        score: (state.isNext && state.score + state.counterScore) || state.score,
      }
    }
    case 'NEXT_LEVEL_AC': {
      if(state.counter < 5) {
        return {
          ...state,
          counter: state.counter + 1,
          birds: birdsData[state.counter + 1],
          isNext: false,
          choiceId: null,
          questionId: Math.floor(Math.random() * 5) + 1,
          isResponse: null,
          score: state.score,
          counterScore: 5
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
          birds: birdsData[0],
          isNext: false,
          choiceId: null,
          questionId: Math.floor(Math.random() * 5) + 1,
          isResponse: null,
          score: 0,
          counterScore: 5,
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
export const setCounterScore = () => ({type: 'SET_COUNTER_SCORE'});
export const nextLevelAC = () => ({type: 'NEXT_LEVEL_AC'});

//thunk

export const startGame = () => {
  return dispatch => {
    dispatch(startGameState(birdsData));
  }
}

export default songbirdReducer;
