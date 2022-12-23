import { ReactNode, ElementType, ComponentProps, useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { classNames } from "utils/css";
import styles from "./Btn.module.scss";

type BtnOwnProps<E extends ElementType> = {
  children: ReactNode;
  as?: E;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  variant?:
    | "text"
    | "textLight"
    | "rect"
    | "rectRegular"
    | "rectNegative"
    | "rectDark"
    | "arrow"
    | "mobileMenu"
    | "mobileVis";
  color?: "primary" | "primaryLight" | "secondary" | "primaryOrange";
  fullWidth?: boolean;
  noWrap?: boolean;
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
  noWrap,
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
    noWrap && styles.noWrap
  );
  return (
    <Component
      onClick={onClick}
      className={classItem}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}

      {...props}
    >
      {variant === "arrow" ? (
        <VscArrowRight
          className={hoverState ? styles.arrowRotate : styles.arrow}
        />
      ) : null}
      {children}
    </Component>
  );
};
