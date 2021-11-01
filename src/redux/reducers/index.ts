import { combineReducers } from "redux";

import { expensesReducer } from "./expensesReducers";

const reducers = { expenses: expensesReducer };

export const rootReducer = combineReducers(reducers);
