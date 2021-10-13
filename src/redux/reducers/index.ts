import { combineReducers } from "redux";

import { wishlistReducer } from "./wishlistReducers";

const reducers = { wishlist: wishlistReducer };

export const rootReducer = combineReducers(reducers);
