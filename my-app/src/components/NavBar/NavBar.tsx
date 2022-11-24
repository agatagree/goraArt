import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={styles.navBarLayout}>
      <div className={styles.navBarLinksContainer}>
      <NavLink className={styles.linkNav} to="/">
          HOME
        </NavLink>
        <NavLink className={styles.linkNav} to="/gallery">
          Gallery
        </NavLink>
        <NavLink className={styles.linkNav} to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};
