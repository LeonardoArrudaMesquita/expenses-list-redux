import { AnyAction } from "redux";
import { Expense } from "../../index";

import {
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
} from "../../actions/expensesActions";

const initialValue: Expense[] = [{ name: "", price: "" }];

const updateWishitem = (state: Expense[], action: AnyAction) => {
  const {
    index,
    expense: { name, price },
  } = action.payload;

  state[index] = {
    name,
    price,
  };
  return state;
};

const deleteWishitem = (state: Expense[], action: AnyAction) => {
  const index = action.payload.index;
  state.splice(index, 1);
  return state;
};

export const expensesReducer = (state = initialValue, action: AnyAction) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, ...initialValue];

    case UPDATE_EXPENSE:
      return updateWishitem([...state], action);

    case DELETE_EXPENSE:
      return deleteWishitem([...state], action);

    default:
      return state;
  }
};
