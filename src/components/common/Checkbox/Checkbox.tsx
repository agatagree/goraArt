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
  type?: "checkbox" | "color",
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxl" | "xxxl";
  variant?:
    | "text"
    | "textLight"
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
  type="checkbox",
  onChange,
  onClick,
  ...props
}: CheckboxProps) => {
  const [checkStatus, setCheckStatus] = useState(false);

  const inputClassName = classNames(
    styles.checkboxInput,
    checkStatus && styles.checked,
    color && checkStatus && styles.checkedColor
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
        type={type}
        checked={checked}
        disabled={disabled}
        className={inputClassName}
        onChange={() => setCheckStatus(!checkStatus)}
        style={{backgroundColor:color}}
        {...props}
      />
      <Btn
        as="label"
        htmlFor={name}
        size={size}
        variant={variant}
      >
        {label}
      </Btn>
    </div>
  );
};
