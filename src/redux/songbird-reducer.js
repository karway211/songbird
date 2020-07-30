const initialState = {
  counter: 0,
  birds: null,
  isNext: false,
  choiceId: null,
  questionId: null,
  isResponse: null,
  score: 0,
  counterScore: 5
}

const songbirdReducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default songbirdReducer;
