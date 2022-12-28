import { useState, createContext } from "react";
import { NavBar } from "./NavBar/NavBar";
import { NavBarDrawer } from "./NavBarDrawer/NavBarDrawer";
import { NavBarOverlay } from "./NavBarOverlay/NavBarOverlay";
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

  return (
    <>
      <NavBarContext.Provider
        value={{ activeDrawer, setActiveDrawer, isOpen, setIsOpen }}
      >
        <header className={styles.navBarWrapper}>
          <NavBar />
          {isOpen ? <NavBarDrawer /> : null}
        </header>
        <NavBarOverlay />
      </NavBarContext.Provider>
    </>
  );
};
