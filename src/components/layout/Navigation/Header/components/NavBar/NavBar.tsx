import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "components/common";
import { PrimaryNavigation } from "../PrimaryNavigation";
import { BurgerMenu, GalleryNavigation } from "./components";
import { FilterContext } from "providers/FilterProvider";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [galleryMenuState, setGallerymenuState] = useState(false);
  const [languageBtn, setLanguageBtn] = useState<"PL" | "EN">("EN");
  const { i18n } = useTranslation();
  const { dispatch } = useContext(FilterContext);

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else {
      setGallerymenuState(false);
      dispatch({ type: "CLEAR_SELECTION" });
    }
  }, [pageName]);

  const changeLanguage = () => {
    setLanguageBtn(languageBtn === "PL" ? "EN" : "PL");
    i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
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
          <Btn onClick={changeLanguage}>{languageBtn}</Btn>
          <BurgerMenu />
        </div>
      </div>
      {galleryMenuState && <GalleryNavigation />}
    </>
  );
};
