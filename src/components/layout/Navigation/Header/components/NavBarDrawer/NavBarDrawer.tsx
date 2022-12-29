import { useContext } from "react";
import { NavBarContext } from "../Header";
import { GalleryFiltration, MobileNavigationDrawer } from "./components";

export const NavBarDrawer = () => {
  const { activeDrawer } = useContext(NavBarContext);

  return (
    <>
      {activeDrawer === "mobileMenu" && <MobileNavigationDrawer />}
      {activeDrawer === "filterMenu" && <GalleryFiltration />}
    </>
  );
};
