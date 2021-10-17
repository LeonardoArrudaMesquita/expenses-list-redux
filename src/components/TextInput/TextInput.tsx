import { InputHTMLAttributes } from "react";

import "./styles.css";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ ...rest }: Props) {
  return <input className="text-input" {...rest} />;
}
