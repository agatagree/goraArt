import { ReactNode, ElementType, ComponentProps, useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { classNames } from "utils/css";
import { Color, Size } from "../commonTypes";
import styles from "./Btn.module.scss";

type BtnOwnProps<E extends ElementType> = {
  children: ReactNode;
  as?: E;
  size?: Size;
  color?: Color;
  disabled?: boolean;
  variant?:
    | "text"
    | "textLight"
    | "rect"
    | "rectNegative"
    | "rectDark"
    | "arrow"
    | "mobileMenu"
    | "mobileVis";
  fullWidth?: boolean;
  upperCase?: boolean;
  noWrap?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type BtnProps<E extends ElementType> = BtnOwnProps<E> &
  Omit<ComponentProps<E>, keyof BtnOwnProps<E>>;

export const Btn = <E extends ElementType = "button">({
  children,
  as,
  size,
  variant,
  color,
  fullWidth,
  upperCase,
  noWrap,
  target,
  rel,
  onClick,
  ...props
}: BtnProps<E>) => {
  const [hoverState, setHoverState] = useState(false);
  const Component = as || "button";
  const classItem = classNames(
    styles.btn,
    variant && styles[variant],
    size && size,
    color && color,
    fullWidth && styles.fullWidth,
    noWrap && styles.noWrap,
    upperCase && styles.upperCase
  );
  return (
    <Component
      onClick={onClick}
      className={classItem}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      target={target || "_self"}
      {...props}
    >
      {children}
      {variant === "arrow" ? (
        <VscArrowRight
          className={hoverState ? styles.arrowRotate : styles.arrow}
        />
      ) : null}
    </Component>
  );
};
