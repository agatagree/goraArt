import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "components/common";
import { NavBarContext } from "../../Header";
import { PrimaryNavigation } from "../PrimaryNavigation";
import { LanguageBtn } from "../PrimaryNavigation/components/LanguageBtn";
import { BurgerMenu, GalleryNavigation } from "./components";
import { FilterContext } from "providers/FilterProvider";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [galleryMenuState, setGallerymenuState] = useState(false);

  const { dispatch } = useContext(FilterContext);
  const { setIsOpen } = useContext(NavBarContext);

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else {
      setGallerymenuState(false);
      dispatch({ type: "CLEAR_SELECTION" });
    }
  }, [pageName, dispatch]);

  return (
    <>
      <div className={styles.navBarLayout}>
        <div className={styles.navBarLinksContainer}>
          <Btn as={NavLink} to="/" onClick={() => setIsOpen(false)}>
            <img
              className={styles.navBarIcon}
              src="/assets/logo.svg"
              alt="logo"
            />
          </Btn>
          <div className={styles.navBarLinksWrapper}>
            <PrimaryNavigation />
          </div>
          <div className={styles.navBarLinksWrapper}>
            <LanguageBtn />
          </div>
          <BurgerMenu />
        </div>
      </div>
      {galleryMenuState && <GalleryNavigation />}
    </>
  );
};
