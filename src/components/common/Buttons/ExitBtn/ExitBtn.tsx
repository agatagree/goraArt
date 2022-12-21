import { MdOutlineClear } from "react-icons/md";
import { Btn } from "components/common";
import styles from "./ExitBtn.module.scss";

export const ExitBtn = (props: { onClick: () => void }) => {
  return (
    <div className={styles.buttonWrapper}>
      <Btn onClick={props.onClick}>
        <MdOutlineClear />
      </Btn>
    </div>
  );
};
