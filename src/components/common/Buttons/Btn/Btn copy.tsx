import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./Btn.module.scss";
import { NavLink, Link } from "react-router-dom";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  as?: "link" | "navlink" | "button" | "a";
  disabled?: boolean;
  size?: "S" | "L";
  variant?: "Text" | "Rect" | "RectRegular" | "RectNegative" | "Arrow";
  onClick?: () => void;
};

export const Btn = ({
  to,
  href,
  children,
  as,
  disabled,
  size,
  variant,
  onClick,
  ...props
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
      <Link
        to={to}
        className={classnames(classNames.join(" "))}
        {...props}
      >
        {children}
      </Link>
    );
  } else if (as === "navlink" && to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? classnames(classNames.join(" "), styles.ActiveBtn)
            : classnames(classNames.join(" "))
        }
        {...props}
      >
        {children}
      </NavLink>
    );
  } else if (as === "a" && href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classnames(classNames.join(" "))}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classnames(classNames.join(" "))}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
};
