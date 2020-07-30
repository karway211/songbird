import { combineReducers, createStore } from "redux";
import songbirdReducer from "./songbird-reducer";

let redusers = combineReducers({
  songbirdBlock: songbirdReducer
})

const store = createStore(redusers);
window.store = store;

export default store;
