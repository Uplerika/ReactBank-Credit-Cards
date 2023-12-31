import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../rootReducer";

const initialState = {
  accounts: [],
  operations: [],
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
