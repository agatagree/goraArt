import { ReactNode, ElementType, ComponentProps } from "react";
import { classNames } from "utils/css";
import { Color, Size } from "../commonTypes";
import { TextVariant } from "./enums/text-variant.enum";
import styles from "./Text.module.scss";

type TextOwnProps<E extends ElementType> = {
  size?: Size;
  color?: Color;
  variant?: TextVariant;
  children: ReactNode;
  as?: E;
  capitalize?: boolean;
  suffixIcon?: ReactNode;
  preWrap?: boolean;
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
  suffixIcon,
  preWrap,
}: TextProps<E>) => {
  const Component = as || "p";
  const classItem = classNames(
    styles.text,
    variant && styles[variant],
    size && size,
    color && color,
    capitalize && styles.capitalize,
    preWrap && styles.preWrap
  );

  return (
    <Component className={classItem}>
      {children}
      {suffixIcon}
    </Component>
  );
};
