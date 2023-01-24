import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "components/common";
import { NavBarContext } from "../Header";
import { LanguageContext } from "providers/LanguageProvider";

export const PrimaryNavigation = () => {
  const { setActiveDrawer, setIsOpen } = useContext(NavBarContext);
  const { staticText } = useContext(LanguageContext);
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
        {/* {staticText.navBar.gallery} */}
      </Btn>
      <Btn as={NavLink} to="/about" variant="mobileMenu" onClick={handleClick}>
        {/* {staticText.navBar.about} */}
      </Btn>
      <Btn
        as={NavLink}
        to="/contact"
        variant="mobileMenu"
        onClick={handleClick}
      >
        {/* {staticText.navBar.contact} */}
      </Btn>
    </>
  );
};
