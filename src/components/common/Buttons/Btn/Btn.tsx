import classnames from "classnames";
import { ReactNode, ElementType, ComponentProps } from "react";
import styles from "./Btn.module.scss";
import { NavLink, Link } from "react-router-dom";

type BtnOwnProps<E extends ElementType> = {
  children: ReactNode;
  as?: E;
  disabled?: boolean;
  size?: "S" | "L";
  variant?: "Text" | "Rect" | "RectRegular" | "RectNegative" | "Arrow";
  onClick?: () => void;
};

type BtnProps<E extends ElementType> = BtnOwnProps<E> &
  Omit<ComponentProps<E>, keyof BtnOwnProps<E>>;

export const Btn = <E extends ElementType = "button">({
  children,
  as,
  disabled,
  size,
  variant,
  onClick,
  ...props
}: BtnProps<E>) => {
  const Component = as || "button";
  const classNames = [styles.btn];
  if (size) {
    classNames.push(styles[size]);
  }
  if (variant) {
    classNames.push(styles[variant]);
  }
    return (
      <Component
        onClick={onClick}
        className={classnames(classNames.join(" "))}
        disabled={disabled}
        {...props}
      >
        {children}
      </Component>
    );
  }
