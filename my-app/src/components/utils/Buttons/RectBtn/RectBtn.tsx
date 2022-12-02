import styles from "./RectBtn.module.scss";
import { Link } from "react-router-dom";


interface buttonProps {
  linkTo: string;
  text: string;
}

export const RectBtn = ({ linkTo, text }: buttonProps) => {
  return (
    <Link
      className={styles.buttonText}
      to={linkTo}
    >
      <p>{text}</p>
    </Link>
  );
};
