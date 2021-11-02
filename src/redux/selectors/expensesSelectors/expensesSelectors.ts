import { Expense, RootStore } from "../../index";

export const selectExpenses = (store: RootStore) => store.expenses;

export const selectExpensesTotal = (store: RootStore) =>
  store.expenses.reduce(
    (prev: number, curr: Expense) => Number(prev) + Number(curr.price),
    0
  );

export const selectFilledExpenses = (store: RootStore) =>
  store.expenses.filter((expense) => expense.name && expense.price);
