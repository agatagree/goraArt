import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "components/common";
import { PrimaryNavigation } from "../PrimaryNavigation";
import { BurgerMenu, GalleryNavigation } from "./components";
import { LanguageContext } from "providers/LanguageProvider";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [galleryMenuState, setGallerymenuState] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
  }, [pageName]);

  const handleTranslation = () => {
    setLanguage(language === "PL" ? "EN" : "PL")
  };

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
          <Btn onClick={handleTranslation}>{language}</Btn>
          <BurgerMenu />
        </div>
      </div>
      {galleryMenuState && <GalleryNavigation />}
    </>
  );
};
