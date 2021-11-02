import { ButtonHTMLAttributes } from "react";

import "./styles.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, className, ...rest }: Props) {
  return (
    <button {...rest} className={`button ${className}`}>
      {title}
    </button>
  );
}
