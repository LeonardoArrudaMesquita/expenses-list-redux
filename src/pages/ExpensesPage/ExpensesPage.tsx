import { Divider } from "../../components/Divider";
import { ExpensesForm } from "../../components/ExpensesForm";
import { ExpensesTotal } from "../../components/ExpensesTotal";

import "./styles.css";

export function ExpensesPage() {
  return (
    <div className="expenses-page container">
      <ExpensesForm />
      <Divider direction="col" className="expenses-page__divider" />
      <ExpensesTotal />
    </div>
  );
}
