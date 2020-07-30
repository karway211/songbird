import birdsData from "../api/api";

const initialState = {
  counter: 0,
  birds: null,
  isNext: false,
  choiceId: null,
  questionId: Math.floor(Math.random() * 5) + 1,
  isResponse: null,
  score: 0,
  counterScore: 5
}

const songbirdReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME_STATE': {
      return {
        ...state,
        birds: action.birds,
      }
    }
    default: {
      return state;
    }
  }
}

//ac
const startGameState = (birds) => ({type: 'START_GAME_STATE', birds});

//thunk

export const startGame = () => {
  return dispatch => {
    dispatch(startGameState(birdsData));
  }
}

export default songbirdReducer;
