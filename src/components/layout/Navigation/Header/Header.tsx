import { useState, createContext, useMemo } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { NavBarDrawer } from "./components/NavBarDrawer/NavBarDrawer";
import { NavBarOverlay } from "./components/NavBarOverlay/NavBarOverlay";
import styles from "./Header.module.scss";

interface NavBrContextInterface {
  activeDrawer: string;
  setActiveDrawer: (f: string) => void;
  isOpen: boolean;
  setIsOpen: (f: boolean) => void;
}
const defaultState = {
  activeDrawer: "",
  setActiveDrawer: () => {},
  isOpen: false,
  setIsOpen: () => {},
};
export const NavBarContext = createContext<NavBrContextInterface>(defaultState);

export const Header = () => {
  const [activeDrawer, setActiveDrawer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({ activeDrawer, setActiveDrawer, isOpen, setIsOpen }),
    [isOpen, activeDrawer]
  );

  return (
    <NavBarContext.Provider value={value}>
      <header className={styles.navBarWrapper}>
        <NavBar />
        {isOpen ? <NavBarDrawer /> : null}
      </header>
      <NavBarOverlay />
    </NavBarContext.Provider>
  );
};
