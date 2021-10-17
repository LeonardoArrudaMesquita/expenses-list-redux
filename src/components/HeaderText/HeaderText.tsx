import { ReactNode } from "react";

import "./styles.css";

type Props = {
  children: ReactNode;
};

export function HeaderText({ children }: Props) {
  return <h1 className="header-text">{children}</h1>;
}
