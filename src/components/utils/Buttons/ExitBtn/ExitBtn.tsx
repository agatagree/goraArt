import { MdOutlineClear } from "react-icons/md";
import styles from "./ExitBtn.module.scss";

export const ExitBtn = (props:{onClick:()=>void}) => {
  return (
    <button className={styles.buttonWrapper} onClick={props.onClick}>
      <MdOutlineClear />
    </button>
  );
};
