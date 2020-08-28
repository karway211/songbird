import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import songbirdReducer from "./songbird-reducer";

let reducers = combineReducers({
  songbirdBlock: songbirdReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

type ReducersType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<ReducersType>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never;

// @ts-ignore
window.__store__ = store;

export default store;
