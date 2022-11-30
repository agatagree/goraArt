import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBarMainLinks = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
        }
        to="/gallery"
      >
        Gallery
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.linkNavToggleMenuActive : styles.linkNavToggleMenu
        }
        to="/about"
      >
        About
      </NavLink>
    </>
  );
};
