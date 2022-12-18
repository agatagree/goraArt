import { useContext } from "react";
import { NavBarContext } from "../Header";
import { GalleryFiltration } from "./GalleryFiltration/GalleryFiltration";
import { Login } from "./Login/Login";
import { MobileNavigationDrawer } from "./MobileNavigationDrawer/MobileNavigationDrawer";

export const NavBarDrawer = () => {
  const { activeDrawer } = useContext(NavBarContext);

  return (
    <>
      {activeDrawer === "login" && <Login />}
      {activeDrawer === "mobileMenu" && <MobileNavigationDrawer />}
      {activeDrawer === "filterMenu" && <GalleryFiltration />}
    </>
  );
};
