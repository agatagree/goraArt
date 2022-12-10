import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Btn.module.scss";
import { NavLink, Link } from "react-router-dom";

type Props = {
  to?: string;
  children: ReactNode;
  as?: "link" | "navlink" | "button";
  disabled?: boolean;
  size?: "S" | "L";
  variant?: "Text" | "Rect" | "RectRegular" | "RectNegative" | "Arrow";
  onClick?: () => void;
};

export const Btn = ({
  to,
  children,
  as,
  disabled,
  size,
  variant,
  onClick,
}: Props) => {
  const classNames = [styles.btn];
  if (size) {
    classNames.push(styles[size]);
  }
  if (variant) {
    classNames.push(styles[variant]);
  }

  if (as === "link" && to) {
    return (
      <Link to={to} className={classnames(classNames.join(" "))}>
        {children}
      </Link>
    );
  } else if (as === "navlink" && to) {
    return (
      <NavLink to={to} className={classnames(classNames.join(" "))}>
        {children}
      </NavLink>
    );
  } else {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classnames(classNames.join(" "))}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};
