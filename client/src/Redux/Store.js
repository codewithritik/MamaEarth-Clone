import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import Router from "./Router.js"


import LoginReducer from "./UserRes/loginReducer.js";

const rootreducer = combineReducers({
    product: Router,
    Logreducer: LoginReducer
})
export const store = createStore(rootreducer, applyMiddleware(thunk));

console.log(store.getState())