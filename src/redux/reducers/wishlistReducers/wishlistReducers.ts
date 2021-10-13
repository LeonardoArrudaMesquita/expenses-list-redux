import { AnyAction } from "redux";

import {
  ADD_WISHITEM,
  UPDATE_WISHITEM,
  DELETE_WISHITEM,
  GET_WISHITEM,
} from "../../actions/wishlistActions";

const initialValue: String[] = [""];

const updateWishitem = (state: String[], action: AnyAction) => {
  const index = action.payload.index;
  state[index] = action.payload.value;
  return state;
};

const deleteWishitem = (state: String[], action: AnyAction) => {
  const index = action.payload.index;
  state.slice(1, index);
  return state;
};

export const wishlistReducer = (state = initialValue, action: AnyAction) => {
  switch (action.type) {
    case GET_WISHITEM:
      return state;

    case ADD_WISHITEM:
      return [...state, ""];

    case UPDATE_WISHITEM:
      return updateWishitem([...state], action);

    case DELETE_WISHITEM:
      return deleteWishitem([...state], action);

    default:
      return state;
  }
};
