import { ButtonHTMLAttributes } from "react";

import "./styles.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, ...rest }: Props) {
  return (
    <button {...rest} className="button">
      {title}
    </button>
  );
}
