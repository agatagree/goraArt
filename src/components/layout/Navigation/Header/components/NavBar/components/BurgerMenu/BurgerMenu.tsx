import { useContext } from "react";
import { NavBarContext } from "../../../../Header";
import styles from "./BurgerMenu.module.scss";
import { classNames } from "utils/css";

export const BurgerMenu = () => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    !isOpen ? setActiveDrawer("mobileMenu") : setActiveDrawer("");
  };

  return (
    <button
      className={classNames(styles.button, isOpen ? styles.wrapperActive : styles.wrapper)}
      onClick={handleDrawer}
    >
      <div className={styles.content}>
        <div className={`${styles.line} ${styles.top}`} />
        <div className={`${styles.line} ${styles.middle}`} />
        <div className={`${styles.line} ${styles.bottom}`} />
      </div>
    </button>
  );
};
