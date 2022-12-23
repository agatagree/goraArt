import { useState, ChangeEvent } from "react";
import { Btn } from "components/common";
import { classNames } from "utils/css";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  type?: "checkbox" | "color";
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  variant?: "text" | "textLight" | "mobileMenu" | "mobileVis";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export const Checkbox = ({
  id,
  name,
  value,
  label,
  checked = false,
  disabled,
  color,
  size,
  variant,
  type = "checkbox",
  onChange,
  onClick,
  ...props
}: CheckboxProps) => {

  const inputClassName = classNames(
    styles.checkboxInput,
    color && styles.checkboxInputColor
  );

  return (
    <div
      className={styles.container}
    >
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        checked={checked}
        disabled={disabled}
        className={inputClassName}
        onChange={onChange}
        style={{
          background: color,
          backgroundSize: "cover",
        }}
        {...props}
      />
      <Btn as="label" htmlFor={name} size={size} variant={variant}>
        {label}
      </Btn>
    </div>
  );
};
