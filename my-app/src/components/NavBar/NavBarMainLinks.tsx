import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBarMainLinks = () => {
  return (
    <>
      <NavLink className={styles.linkNavToggleMenu} to="/gallery">
        Gallery
      </NavLink>
      <NavLink className={styles.linkNavToggleMenu} to="/about">
        About
      </NavLink>
    </>
  );
};
