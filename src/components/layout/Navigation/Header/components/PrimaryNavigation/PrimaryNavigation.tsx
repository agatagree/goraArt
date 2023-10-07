import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { NavBarContext } from "../../Header";
import { useScrollDirection } from "hooks/useScrollDirection";

export const PrimaryNavigation = () => {
  const [isAnchorLinkScroll, setIsAnchorLinkScroll] = useState(false);
  const { setActiveDrawer, setIsOpen, setIsHeaderHidden } =
    useContext(NavBarContext);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(false);
    setActiveDrawer("");
    setIsAnchorLinkScroll(true);
  };

  useScrollDirection({
    scrollDirectionCallback: (
      direction: string,
      isAnchorLinkScroll: boolean
    ) => {
      if (direction === "down") {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    },
    isAnchorLinkScroll,
  });

  return (
    <>
      <Btn as={Link} to="/gallery" variant="mobileMenu" onClick={handleClick}>
        {t("navBar.gallery")}
      </Btn>
      <Btn
        as={Link}
        to="/#about"
        variant="mobileMenu"
        onClick={handleClick}
        reloadDocument
      >
        {t("navBar.about")}
      </Btn>
      <Btn
        as={Link}
        to="/#contact"
        variant="mobileMenu"
        onClick={handleClick}
        reloadDocument
      >
        {t("navBar.contact")}
      </Btn>
    </>
  );
};
