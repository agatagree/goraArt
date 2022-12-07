import styles from "./AppBar.module.scss";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { NavBarContext } from "../../NavBar/NavBar";
import { useContext } from "react";

export const AppBar = () => {
  const { isOpen, setIsOpen, activeDrawer, setActiveDrawer } =
    useContext(NavBarContext);

  const handleDrawer = (props: string) => {
    setIsOpen(!isOpen);
    setActiveDrawer(props);
  };

  return (
    <>
      <div className={styles.navBarLayout}>
        <div className={styles.navBarLinksContainer}>
          <NavLink className={styles.linkNav} to="/">
            <img
              className={styles.navBarIcon}
              src="/assets/logo.svg"
              alt="logo"
            />
          </NavLink>
          <div className={styles.navBarLinksWrapperDesktop}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.linkNavToggleMenuActive
                  : styles.linkNavToggleMenu
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? styles.linkNavToggleMenuActive
                  : styles.linkNavToggleMenu
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
        <div className={styles.navBarLinksContainer}>
          <div className={styles.navBarLinksWrapper}>
            <button
              className={styles.linkNav}
              onClick={() => handleDrawer("login")}
            >
              <IoPersonCircleOutline className={styles.navBarIcon} />
            </button>
          </div>
          <NavLink className={styles.linkNav} to="/basket">
            <BiShoppingBag className={styles.navBarIcon} />
          </NavLink>
          <NavLink className={styles.linkNav} to="/search">
            <BiSearch className={styles.navBarIcon} />
          </NavLink>
          <BurgerMenu />
        </div>
      </div>
      {activeDrawer === "mobileMenu" && <MobileMenu />}
    </>
  );
};
