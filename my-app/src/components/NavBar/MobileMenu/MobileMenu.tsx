import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { NavBarContext } from "../../NavBar/NavBar";
import { useContext } from "react";

export const MobileMenu = () => {
  const { setIsOpen, setActiveDrawer } = useContext(NavBarContext);

  const handleClick = () => {
    setIsOpen(false);
    setActiveDrawer("");
  };

  return (
    <div className={styles.navBarToggleMenu}>
      <div className={styles.navBarLinksWrapperMobile}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
          }
          to="/gallery"
          onClick={handleClick}
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
          }
          to="/about"
          onClick={handleClick}
        >
          About
        </NavLink>
      </div>
      <NavLink
        className={styles.navBarAccountLink}
        to="/login"
        onClick={handleClick}
      >
        Account
      </NavLink>
    </div>
  );
};
