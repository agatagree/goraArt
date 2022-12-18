import { useState } from "react";
import { classNames } from "utils/css";
import { Btn } from "../Buttons/Btn/Btn";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: "primary" | "primaryLight" | "secondary" | "primaryOrange";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  variant?:
    | "text"
    | "textLight"
    | "rect"
    | "rectRegular"
    | "rectNegative"
    | "arrow"
    | "mobileMenu"
    | "mobileVis";
  onChange?: () => void;
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
  onChange,
  onClick,
  ...props
}: CheckboxProps) => {
  const [checkStatus, setCheckStatus] = useState(false);

  const inputClassName = classNames(
    styles.checkboxInput,
    checkStatus && styles.checked,
    color && color
  );

  return (
    <div
      className={styles.container}
      onClick={() => setCheckStatus(!checkStatus)}
    >
      <input
        id={id}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={inputClassName}
        onChange={() => setCheckStatus(!checkStatus)}
        {...props}
      />
      <Btn
        as="label"
        htmlFor={name}
        size={size}
        color={color}
        variant={variant}
      >
        {label}
      </Btn>
    </div>
  );
};
