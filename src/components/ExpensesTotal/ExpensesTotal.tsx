import { useSelector } from "react-redux";
import { Expense } from "../../redux";
import { selectExpenses } from "../../redux/selectors/expensesSelectors";
import { Divider } from "../Divider";
import { ExpenseItem } from "../ExpenseItem";

import "./styles.css";

export function ExpensesTotal() {
  const expenses = useSelector(selectExpenses);
  const filteredExpenses = expenses.filter((item) => item.name && item.price);
  const totalPrice = filteredExpenses.reduce(
    (prev: number, curr: Expense) => Number(prev) + Number(curr.price),
    0
  );

  return (
    <div className="expenses-total">
      <h2 className="expenses-total__title">Expenses</h2>

      {!totalPrice ? (
        <>
          {filteredExpenses.map(({ name, price }) => (
            <ExpenseItem name={name} price={price} />
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
