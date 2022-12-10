import { useContext, useState } from "react";
import { NavBarContext } from "../../Header";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu = () => {
  const { activeDrawer, setActiveDrawer } = useContext(NavBarContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleDrawer = () => {
    setMobileMenu(!mobileMenu);
    !mobileMenu ? setActiveDrawer("mobileMenu") : setActiveDrawer("");
  };

  return (
    <>
      <button
        className={(activeDrawer !== "") ? styles.burgerWrapperActive : styles.burgerWrapper}
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
