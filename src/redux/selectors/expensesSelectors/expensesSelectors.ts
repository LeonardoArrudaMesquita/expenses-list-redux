import { RootStore } from "../../index";

export const selectExpenses = (state: RootStore) => state.expenses;
