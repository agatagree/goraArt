import { useContext, useEffect, useState } from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "components/common/Buttons/Btn/Btn";
import { NavBarContext } from "../Header";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { GalleryNavigation } from "./GalleryNavigation/GalleryNavigation";
import { PrimaryNavigation } from "./PrimaryNavigation/PrimaryNavigation";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const { setActiveDrawer, setIsOpen, isOpen } = useContext(NavBarContext);
  const [galleryMenuState, setGallerymenuState] = useState(false);

  const handleDrawer = (props: string) => {
    !isOpen && setIsOpen(true);
    setActiveDrawer(props);
  };

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
  }, [pageName]);

  return (
    <>
      <div className={styles.navBarLayout}>
        <div className={styles.navBarLinksContainer}>
          <Btn as={NavLink} to="/">
            <img
              className={styles.navBarIcon}
              src="/assets/logo.svg"
              alt="logo"
            />
          </Btn>
          <div className={styles.navBarLinksWrapper}>
            <PrimaryNavigation />
          </div>
        </div>
        <div className={styles.navBarLinksContainer}>
          <Btn onClick={() => handleDrawer("login")} variant="mobileVis">
            <IoPersonCircleOutline className={styles.navBarIcon} />
          </Btn>
          <Btn onClick={() => handleDrawer("basket")}>
            <BiShoppingBag className={styles.navBarIcon} />
          </Btn>
          <Btn onClick={() => handleDrawer("search")}>
            <BiSearch className={styles.navBarIcon} />
          </Btn>
          <BurgerMenu />
        </div>
      </div>
      {galleryMenuState && <GalleryNavigation />}
    </>
  );
};
