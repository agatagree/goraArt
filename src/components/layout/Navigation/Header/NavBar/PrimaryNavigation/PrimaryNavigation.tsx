import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Btn } from "../../../../../common/Buttons/Btn/Btn";
import styles from "./PrimaryNavigation.module.scss";

export const PrimaryNavigation = () => {
  return (
    <div className={styles.navBarLinksWrapper}>
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
    </div>
  );
};
