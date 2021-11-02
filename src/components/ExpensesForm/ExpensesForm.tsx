import { useDispatch, useSelector } from "react-redux";

import { HeaderText } from "../HeaderText";
import { ExpensesListItem } from "../ExpensesListItem";
import { Button } from "../Button";
import { ADD_EXPENSE } from "../../redux/actions/expensesActions";
import { selectExpenses } from "../../redux/selectors/expensesSelectors";

import "./styles.css";

export function ExpensesForm() {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  const handleAddExpense = () => dispatch({ type: ADD_EXPENSE });

  return (
    <div className="expenses-form">
      <HeaderText>Expenses List</HeaderText>
      {expenses.map((item, index) => (
        <ExpensesListItem key={index} index={index} />
      ))}
      <Button
        title="+ Add Expense"
        onClick={handleAddExpense}
        className="mg-bottom"
      />
    </div>
  );
}
