import styles from "./BurgerMenu.module.scss";
import { NavBarContext } from "../NavBar";
import { useContext, useState, useEffect } from "react";

export const BurgerMenu = () => {
  const { isOpen, setIsOpen, setActiveDrawer } = useContext(NavBarContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    setMobileMenu(!mobileMenu);
    !mobileMenu ? setActiveDrawer("mobileMenu") : setActiveDrawer("");
  };

  useEffect(() => {
    if (isOpen === false) {
      setMobileMenu(false);
      setActiveDrawer("");
    }
  }, [isOpen, setActiveDrawer]);

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
