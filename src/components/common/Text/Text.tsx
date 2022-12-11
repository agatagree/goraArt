import classnames from "classnames";
import { ReactNode, ElementType, ComponentProps } from "react";
import styles from "./Text.module.scss";

type TextOwnProps<E extends ElementType> = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  color?: "primary" | "primaryLight" | "secondary" | "primaryOrange";
  variant?: "text" | "header" | "mainHeader" | "subHeader" | "basicHeader";
  children: ReactNode;
  as?: E;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType = "p">({
  size,
  color,
  variant,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "p";

const classNames = [styles.text];
if (variant) {
  classNames.push(styles[variant])
} 
if (size) {
  classNames.push(styles[size]);
}
if (color) {
  classNames.push(styles[color]);
}

  return <Component className={classnames(classNames.join(" "))}>{children}</Component>;
};
