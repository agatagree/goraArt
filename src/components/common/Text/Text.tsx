import { ReactNode, ElementType, ComponentProps } from "react";
import { classNames } from "utils/css";
import styles from "./Text.module.scss";

type TextOwnProps<E extends ElementType> = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  color?: "primary" | "primaryLight" | "secondary" | "primaryOrange";
  variant?:
    | "text"
    | "header"
    | "mainHeader"
    | "subHeader"
    | "basicHeader"
    | "smallHeader"
  children: ReactNode;
  as?: E;
  capitalize?:boolean;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType = "p">({
  size,
  color,
  variant,
  children,
  capitalize,
  as,
}: TextProps<E>) => {
  const Component = as || "p";
  const classItem = classNames(
    styles.text,
    variant && styles[variant],
    size && size,
    color && color,
    capitalize && styles.capitalize
  );

  return <Component className={classItem}>{children}</Component>;
};
