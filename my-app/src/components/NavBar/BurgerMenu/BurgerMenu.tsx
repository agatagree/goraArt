import styles from "./BurgerMenu.module.scss";
import { Dispatch, SetStateAction } from "react";

type Props = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export const BurgerMenu = ({ toggle, setToggle }: Props) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button
        className={!toggle ? styles.burgerWrapper : styles.burgerWrapperActive}
        onClick={handleToggle}
      >
        <div className={styles.burgerContent}>
          <div className={`${styles.line} ${styles.top}`} />
          <div className={`${styles.line} ${styles.middle}`} />
          <div className={`${styles.line} ${styles.bottom}`} />
        </div>
      </button>
    </>
  );
};
