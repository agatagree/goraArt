import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Btn } from "components/common";
import { NavBarContext } from "../../Header";

export const PrimaryNavigation = () => {
  const { setActiveDrawer, setIsOpen } = useContext(NavBarContext);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(false);
    setActiveDrawer("");
  };

  return (
    <>
      <Btn
        as={NavLink}
        to="/gallery"
        variant="mobileMenu"
        onClick={handleClick}
      >
        {t("navBar.gallery")}
      </Btn>
      <Btn as={NavLink} to="/about" variant="mobileMenu" onClick={handleClick}>
        {t("navBar.about")}
      </Btn>
      <Btn
        as={NavLink}
        to="/contact"
        variant="mobileMenu"
        onClick={handleClick}
      >
        {t("navBar.contact")}
      </Btn>
    </>
  );
};
