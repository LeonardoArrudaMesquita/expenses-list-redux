import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers";

export interface RootStore extends Store {
  wishlist: String[];
}

export const store: RootStore = createStore(rootReducer, composeWithDevTools());
