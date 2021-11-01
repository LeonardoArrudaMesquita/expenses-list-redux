import "./styles.css";

type Props = {
  name: string;
  price: string | number;
};

export function ExpenseItem({ name, price }: Props) {
  return (
    <div className="expense-item">
      <label>{name}</label>
      <label>{`R$ ${price}`}</label>
    </div>
  );
}
