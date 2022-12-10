import { useState, useEffect, createContext } from "react";
import { NavBar } from "./NavBar/NavBar";
import styles from "./Header.module.scss";

interface NavBrContextInterface {
  activeDrawer: string;
  setActiveDrawer: (f: string) => void;
}
const defaultState = {
  activeDrawer: "",
  setActiveDrawer: () => {},
};
export const NavBarContext = createContext<NavBrContextInterface>(defaultState);

export const Header = () => {
  const [activeDrawer, setActiveDrawer] = useState("");

  //do spr czy tego potrzebuje
  useEffect(() => {
    activeDrawer !== ""
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [activeDrawer]);

  return (
    <>
      <NavBarContext.Provider value={{ activeDrawer, setActiveDrawer }}>
        <header className={styles.navBarWrapper}>
          <NavBar />
          {/* <NavBarDrawer /> */}
        </header>
        {(activeDrawer !== "") && <div className={styles.toggleOverlay} onClick={()=>setActiveDrawer("")}></div>}
      </NavBarContext.Provider>
    </>
  );
};
