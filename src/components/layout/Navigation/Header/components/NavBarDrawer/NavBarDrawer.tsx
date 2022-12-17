import { useContext, useState, useEffect } from "react";
import { NavBarContext } from "../Header";
import { GalleryFiltration } from "./GalleryFiltration/GalleryFiltration";
import { Login } from "./Login/Login";
import { MobileNavigationDrawer } from "./MobileNavigationDrawer/MobileNavigationDrawer";
import styles from "./NavBarDrawer.module.scss";

export const NavBarDrawer = () => {
  const { activeDrawer } = useContext(NavBarContext);

  return (
    <>
      {/* <div className={styles.navBarDrawerLayout}> */}
        {activeDrawer === "login" && <Login />}
        {activeDrawer === "mobileMenu" && <MobileNavigationDrawer />}
        {activeDrawer === "filterMenu" && <GalleryFiltration />}
      {/* </div> */}
    </>
  );
};
