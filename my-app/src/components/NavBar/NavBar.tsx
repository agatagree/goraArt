import styles from "./NavBar.module.scss";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { GalleryMenu } from "./GalleryMenu/GalleryMenu";

export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [galleryMenuState, setGallerymenuState] = useState(false);

  const pageName = useLocation();

  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
    if (toggle && (pageName.pathname === "/gallery")) {
      setGallerymenuState(false);
    } 
  }, [pageName, toggle]);

  useEffect(() => {
    if (toggle || toggleFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

  }, [toggle, toggleFilter]);

  return (
    <>
      <div className={styles.navBarWrapper}>
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
        {toggle && <MobileMenu toggle={toggle} setToggle={setToggle} />}
        {galleryMenuState && (
          <GalleryMenu
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
          />
        )}
      </div>
      {(toggle || toggleFilter) && (
        <div
          className={styles.toggleOverlay}
          onClick={() => setToggleFilter(!toggleFilter)}
        ></div>
      )}
    </>
  );
};
