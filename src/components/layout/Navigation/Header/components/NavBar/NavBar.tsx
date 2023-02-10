import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "components/common";
import { PrimaryNavigation } from "../PrimaryNavigation";
import { BurgerMenu, GalleryNavigation } from "./components";
import { LanguageContext } from "providers/LanguageProvider";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const [galleryMenuState, setGallerymenuState] = useState(false);
  const [languageBtn, setLanguageBtn] = useState<"PL" | "EN">("EN");
  // const { language, setLanguage } = useContext(LanguageContext);
  const [language, setLanguage] = useState<"pl" | "en">("pl");
  const { i18n } = useTranslation();

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
  }, [pageName]);

  // const handleTranslation = () => {
  //   setLanguage(language === "PL" ? "EN" : "PL");
  //   setLanguageBtn(language === "PL" ? "PL" : "EN");
  // };

  const changeLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl");
    setLanguageBtn(language === "pl" ? "PL" : "EN");
    i18n.changeLanguage(language);
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
