import { useState, createContext, useMemo } from "react";
import { classNames } from "utils/css";
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
  isHeaderHidden: false,
  setIsHeaderHidden: () => {},
};

export const NavBarContext = createContext<NavBarContextProps>(defaultState);

export const Header = () => {
  const [activeDrawer, setActiveDrawer] = useState("");
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      activeDrawer,
      setActiveDrawer,
      isOpen,
      setIsOpen,
      isHeaderHidden,
      setIsHeaderHidden,
    }),
    [isOpen, activeDrawer, isHeaderHidden]
  );

  return (
    <NavBarContext.Provider value={value}>
      <header
        className={classNames(styles.layout, isHeaderHidden && styles.hidden)}
      >
        <NavBar />
        {isOpen ? <NavBarDrawer /> : null}
      </header>
      <NavBarOverlay />
    </NavBarContext.Provider>
  );
};
