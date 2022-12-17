import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Btn, ExitBtn } from "components/common/Buttons";
import { MenuDrawer } from "components/common/MenuDrawer/MenuDrawer";
import { NavBarContext } from "../../Header";
import { PrimaryNavigation } from "../../NavBar/PrimaryNavigation/PrimaryNavigation";
import styles from "./MobileNavigationDrawer.module.scss";

export const MobileNavigationDrawer = () => {
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setActiveDrawer("");
  };
  return (
    <MenuDrawer>
      <div className={styles.mobileLayout}>
        <div className={styles.mobileNav}>
          <PrimaryNavigation />
        </div>
        <Btn as={NavLink} to="/login" variant="Text" onClick={handleClick}>
          Account
        </Btn>
      </div>
    </MenuDrawer>
  );
};
