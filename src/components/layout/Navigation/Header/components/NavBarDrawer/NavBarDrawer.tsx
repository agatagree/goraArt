import { useContext } from "react";
import { NavBarContext } from "../Header";
import { Login } from "./Login/Login";
import styles from "./NavBarDrawer.module.scss";

export const NavBarDrawer = () => {
  const { activeDrawer, setActiveDrawer } = useContext(NavBarContext);
  return (
    <>
      <div className={styles.navBarDrawerLayout}>
        {activeDrawer === "login" && <Login />}
      </div>
    </>
  );
};
