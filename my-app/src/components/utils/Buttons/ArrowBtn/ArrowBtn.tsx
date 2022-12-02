import styles from "./ArrowBtn.module.scss";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import { useState } from "react";

interface buttonProps {
  linkTo: string;
  text: string;
}

export const ArrowBtn = ({ linkTo, text }: buttonProps) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <Link
      className={styles.buttonText}
      to={linkTo}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <VscArrowRight
        className={hoverState ? styles.buttonIconRotate : styles.buttonIcon}
      />
      <p>{text}</p>
    </Link>
  );
};
