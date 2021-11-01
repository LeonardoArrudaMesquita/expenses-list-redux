import { TextInput } from "../TextInput";
import { IconButton } from "../IconButton";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from "../../redux/actions/expensesActions";
import { selectExpenses } from "../../redux/selectors/expensesSelectors";

type Props = {
  index: number;
};

export function ExpensesListItem({ index }: Props) {
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();

  const handleDeleteExpense = (index: number) =>
    expenses.length > 1 &&
    dispatch({ type: DELETE_EXPENSE, payload: { index } });

  const handleUpdateExpense = (index: number) =>
    dispatch({ type: UPDATE_EXPENSE, payload: { index } });

  return (
    <div className="expense-list-item">
      <TextInput type="text" onChange={() => handleUpdateExpense(index)} />
      <IconButton
        iconProps={{ icon: "trash", color: "#D1D1D1", size: "lg" }}
        buttonProps={{ onClick: () => handleDeleteExpense(index) }}
      />
      <TextInput type="number" />
    </div>
  );
}
