import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "components/common/Buttons";
import { NavBarContext } from "../../Header";

export const PrimaryNavigation = () => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleClick = () => {
    setIsOpen(false);
    setActiveDrawer("");
    {!isOpen && setActiveDrawer("")}
  };

  return (
    <>
      <Btn as={NavLink} to="/gallery" variant="mobileMenu" onClick={handleClick}>
        Gallery
      </Btn>
      <Btn as={NavLink} to="/about" variant="mobileMenu" onClick={handleClick}>
        About
      </Btn>
      <Btn as={NavLink} to="/contact" variant="mobileMenu" onClick={handleClick}>
        Contact
      </Btn>
    </>
  );
};
