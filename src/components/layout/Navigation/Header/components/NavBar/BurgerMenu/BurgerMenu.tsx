import { useContext, useState } from "react";
import { NavBarContext } from "../../Header";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const { activeDrawer, setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    setMobileMenu(!mobileMenu);
    !mobileMenu ? setActiveDrawer("mobileMenu") : setActiveDrawer("");
  };

  return (
    <>
      <button
        className={isOpen ? styles.burgerWrapperActive : styles.burgerWrapper}
        onClick={handleDrawer}
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
