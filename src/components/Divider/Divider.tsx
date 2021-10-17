import "./styles.css";

type Props = {
  direction: "col" | "row";
};

export function Divider({ direction }: Props) {
  return (
    <div className={direction === "col" ? "col-divider" : "row-divider"} />
  );
}
