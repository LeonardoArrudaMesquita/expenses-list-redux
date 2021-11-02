import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from "../../redux/actions/expensesActions";
import { selectExpenses } from "../../redux/selectors/expensesSelectors";
import { useEffect, useState } from "react";

type Props = {
  index: number;
};

export function ExpensesListItem({ index }: Props) {
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState<string>("");
  const [expensePrice, setExpensePrice] = useState<string>("");

  useEffect(() => {
    dispatch({
      type: UPDATE_EXPENSE,
      payload: { index, expense: { name: expenseName, price: expensePrice } },
    });
  }, [dispatch, expenseName, expensePrice, index]);

  const handleDeleteExpense = (index: number) =>
    expenses.length > 1 &&
    dispatch({ type: DELETE_EXPENSE, payload: { index } });

  const handleUpdateExpenseName = (expenseName: string) => {
    setExpenseName(expenseName);
  };

  const handleUpdateExpensePrice = (expensePrice: string) => {
    setExpensePrice(expensePrice);
  };

  return (
    <div className="expense-list-item">
      <TextInput
        type="text"
        onChange={(event) => handleUpdateExpenseName(event.target.value)}
      />
      <IconButton
        iconProps={{ icon: "trash", color: "#D1D1D1", size: "lg" }}
        buttonProps={{ onClick: () => handleDeleteExpense(index) }}
      />
      <TextInput
        type="number"
        onChange={(event) => handleUpdateExpensePrice(event.target.value)}
      />
    </div>
  );
}
