import { HeaderText } from "../HeaderText";
import { ExpensesListItem } from "../ExpensesListItem";

import "./styles.css";

export function ExpensesForm() {
  return (
    <div className="expenses-form">
      <HeaderText>Expenses List</HeaderText>
      <ExpensesListItem />
    </div>
  );
}
