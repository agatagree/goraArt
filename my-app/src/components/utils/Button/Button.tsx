import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";

interface buttonProps {
  linkTo: string;
  text: string;
}

export const Button = ({ linkTo, text }: buttonProps) => {
  return (
    <Link className={styles.buttonText} to={linkTo}>
      <VscArrowRight />
      <p>{text}</p>
    </Link>
  );
};
