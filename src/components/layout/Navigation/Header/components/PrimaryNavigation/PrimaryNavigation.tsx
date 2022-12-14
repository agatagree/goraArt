import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "components/common";
import { NavBarContext } from "../Header";

export const PrimaryNavigation = () => {
  const { setActiveDrawer, setIsOpen } = useContext(NavBarContext);

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
        Gallery
      </Btn>
      <Btn as={NavLink} to="/about" variant="mobileMenu" onClick={handleClick}>
        About
      </Btn>
      <Btn
        as={NavLink}
        to="/contact"
        variant="mobileMenu"
        onClick={handleClick}
      >
        Contact
      </Btn>
    </>
  );
};
