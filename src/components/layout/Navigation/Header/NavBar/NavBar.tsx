import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PrimaryNavigation } from "./PrimaryNavigation/PrimaryNavigation";
import { NavBarContext } from "../Header";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const { setActiveDrawer } = useContext(NavBarContext);

  const handleDrawer = (props: string) => {
    setActiveDrawer(props);
  };

  return (
    <div className={styles.navBarLayout}>
      <div className={styles.navBarLinksContainer}>
        <NavLink className={styles.linkNav} to="/">
          <img
            className={styles.navBarIcon}
            src="/assets/logo.svg"
            alt="logo"
          />
        </NavLink>
        <PrimaryNavigation />
      </div>
      <div className={styles.navBarLinksContainer}>
        <button
          className={styles.linkNav}
          onClick={() => handleDrawer("login")}
        >
          <IoPersonCircleOutline className={styles.navBarIcon} />
        </button>
        <button
          className={styles.linkNav}
          onClick={() => handleDrawer("basket")}
        >
          <BiShoppingBag className={styles.navBarIcon} />
        </button>
        <button
          className={styles.linkNav}
          onClick={() => handleDrawer("search")}
        >
          <BiSearch className={styles.navBarIcon} />
        </button>
        <BurgerMenu />
      </div>
    </div>
  );
};
