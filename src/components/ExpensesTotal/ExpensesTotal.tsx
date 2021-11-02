import { useSelector } from "react-redux";
import {
  selectExpensesTotal,
  selectFilledExpenses,
} from "../../redux/selectors/expensesSelectors";
import { Divider } from "../Divider";
import { ExpenseItem } from "../ExpenseItem";

import "./styles.css";

export function ExpensesTotal() {
  const totalPrice = useSelector(selectExpensesTotal);
  const filteredExpenses = useSelector(selectFilledExpenses);

  return (
    <div className="expenses-total">
      <h2 className="expenses-total__title">Expenses</h2>

      {filteredExpenses.length ? (
        <>
          {filteredExpenses.map(({ name, price }, index) => (
            <ExpenseItem name={name} price={price} key={index} />
          ))}
          <Divider direction="row" />
          <ExpenseItem name="Total" price={totalPrice} />
        </>
      ) : (
        <p className="no-expense">Please, fill an expense item!</p>
      )}
    </div>
  );
}
