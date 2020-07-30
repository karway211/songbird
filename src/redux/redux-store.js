import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import songbirdReducer from "./songbird-reducer";

let reducers = combineReducers({
  songbirdBlock: songbirdReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
