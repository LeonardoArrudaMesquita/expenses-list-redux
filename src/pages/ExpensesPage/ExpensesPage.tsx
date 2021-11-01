import { useSelector } from "react-redux";
import { Divider } from "../../components/Divider";
import { ExpensesForm } from "../../components/ExpensesForm";
import { ExpensesTotal } from "../../components/ExpensesTotal";
import { selectExpenses } from "../../redux/selectors/expensesSelectors";

import "./styles.css";

export function ExpensesPage() {
  const expenses = useSelector(selectExpenses);

  return (
    <div className="expenses-page container">
      <ExpensesForm />
      <Divider direction="col" />
      <ExpensesTotal />
    </div>
  );
}
