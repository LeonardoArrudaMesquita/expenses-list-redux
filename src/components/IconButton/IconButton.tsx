import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes } from "react";

import "./styles.css";

type Props = {
  iconProps: FontAwesomeIconProps;
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>;
};

export function IconButton({ iconProps, buttonProps }: Props) {
  return (
    <button {...buttonProps} className="icon-button">
      <FontAwesomeIcon {...iconProps} className="icon-button__icon" />
    </button>
  );
}
