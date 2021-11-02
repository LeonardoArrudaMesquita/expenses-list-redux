import "./styles.css";

type Props = {
  direction: "col" | "row";
  className?: string;
};

export function Divider({ direction, className = "" }: Props) {
  return (
    <div
      className={
        direction === "col"
          ? `col-divider ${className}`
          : `row-divider ${className}`
      }
    />
  );
}
