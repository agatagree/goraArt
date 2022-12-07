import styles from "./ExitBtn.module.scss";
import { MdOutlineClear } from "react-icons/md";

export const ExitBtn = (props:{onClick:()=>void}) => {
  return (
    <button className={styles.buttonWrapper} onClick={props.onClick}>
      <MdOutlineClear />
    </button>
  );
};
