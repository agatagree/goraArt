import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

type toogleType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ toggle, setToggle }: toogleType) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.navBarToggleMenu}>
      <div className={styles.navBarLinksWrapperMobile}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
          }
          to="/gallery"
          onClick={handleToggle}
        >
          Gallery
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
          }
          to="/about"
          onClick={handleToggle}
        >
          About
        </NavLink>
      </div>
      <NavLink className={styles.navBarAccountLink} to="/login">
        Account
      </NavLink>
    </div>
  );
};
