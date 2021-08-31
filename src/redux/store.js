import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./budgetReducer";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  budget: reducer,
  user: userReducer,
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
