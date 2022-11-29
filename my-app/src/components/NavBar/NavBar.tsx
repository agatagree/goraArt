import styles from "./NavBar.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavBarMainLinks } from "./NavBarMainLinks";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggle]);

  return (
    <div className={styles.navBarWrapper}>
      <div className={styles.navBarLayout}>
        <div className={styles.navBarLinksContainer}>
          <NavLink className={styles.linkNav} to="/">
          <img className={styles.navBarIcon} src="/assets/logo.svg" alt="logo" />
          </NavLink>
          <div className={styles.navBarLinksWrapperDesktop}>
            <NavBarMainLinks />
          </div>
        </div>
        <div className={styles.navBarLinksContainer}>
          <div className={styles.navBarLinksWrapper}>
            <NavLink className={styles.linkNav} to="/login">
              <IoPersonCircleOutline className={styles.navBarIcon} />
            </NavLink>
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

      {toggle && (
        <div className={styles.navBarToggleMenu}>
          <div className={styles.navBarLinksWrapperMobile}>
            <NavBarMainLinks />
          </div>
          <NavLink className={styles.linkNav} to="/login">
            Account
          </NavLink>
        </div>
      )}
    </div>
  );
};
