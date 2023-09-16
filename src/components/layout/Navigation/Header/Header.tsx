import { useState, createContext, useMemo } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { NavBarOverlay } from "./components/NavBarOverlay/NavBarOverlay";
import { NavBarContextProps } from "./types/nav-bar-context-props";
import styles from "./Header.module.scss";

const defaultState = {
  activeDrawer: "",
  setActiveDrawer: () => {},
  isOpen: false,
  setIsOpen: () => {},
};

export const NavBarContext = createContext<NavBarContextProps>(defaultState);

export const Header = () => {
  const [activeDrawer, setActiveDrawer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({ activeDrawer, setActiveDrawer, isOpen, setIsOpen }),
    [isOpen, activeDrawer]
  );

  return (
    <NavBarContext.Provider value={value}>
      <header className={styles.layout}>
        <NavBar />
        {isOpen ? <NavBarDrawer /> : null}
      </header>
      <NavBarOverlay />
    </NavBarContext.Provider>
  );
};
