import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";

export type Expense = {
  name: string;
  price: string;
};
export interface RootStore extends Store {
  expenses: Expense[];
}

export const store: RootStore = createStore(rootReducer, composeWithDevTools());
