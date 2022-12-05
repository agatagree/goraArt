import styles from "./AppBar.module.scss";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Dispatch, SetStateAction } from "react";

type toogleType = {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggleLogin: boolean;
  setToggleLogin: Dispatch<SetStateAction<boolean>>;
};

export const AppBar = ({
  toggle,
  setToggle,
  toggleLogin,
  setToggleLogin,
}: toogleType) => {
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
              onClick={() => setToggleLogin(!toggleLogin)}
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
          <BurgerMenu toggle={toggle} setToggle={setToggle} />
        </div>
      </div>
      {toggle && <MobileMenu toggle={toggle} setToggle={setToggle} />}
    </>
  );
};
