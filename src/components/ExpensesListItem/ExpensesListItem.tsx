import { TextInput } from "../TextInput";

import "./styles.css";

export function ExpensesListItem() {
  return (
    <div className="expense-list-item">
      <TextInput />
      <label className="delete-button">Delete</label>
    </div>
  );
}
