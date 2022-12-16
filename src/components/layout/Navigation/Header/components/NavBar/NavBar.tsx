import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PrimaryNavigation } from "./PrimaryNavigation/PrimaryNavigation";
import { NavBarContext } from "../Header";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { Btn } from "components/common/Buttons/Btn/Btn";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const { setActiveDrawer, setIsOpen, isOpen } = useContext(NavBarContext);

  const handleDrawer = (props: string) => {
    setIsOpen(!isOpen);
    setActiveDrawer(props);
  };

  return (
    <div className={styles.navBarLayout}>
      <div className={styles.navBarLinksContainer}>
        <Btn as={NavLink} to="/">
          <img
            className={styles.navBarIcon}
            src="/assets/logo.svg"
            alt="logo"
          />
        </Btn>
        <PrimaryNavigation />
      </div>
      <div className={styles.navBarLinksContainer}>
        <Btn onClick={() => handleDrawer("login")}>
          <IoPersonCircleOutline className={styles.navBarIcon} />
        </Btn>
        <Btn onClick={() => handleDrawer("basket")}>
          <BiShoppingBag className={styles.navBarIcon} />
        </Btn>
        <Btn onClick={() => handleDrawer("search")}>
          <BiSearch className={styles.navBarIcon} />
        </Btn>
        <BurgerMenu />
      </div>
    </div>
  );
};
