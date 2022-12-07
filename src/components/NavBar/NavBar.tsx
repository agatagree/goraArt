import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import { GalleryMenu } from "./GalleryMenu/GalleryMenu";
import { AppBar } from "./AppBar/AppBar";
import { Login } from "../Authorization/Login/Login";
import { OverlayMenu } from "./OverlayMenu/OverlayMenu";
import styles from "./NavBar.module.scss";

interface NavBrContextInterface {
  isOpen: boolean;
  setIsOpen: (f: boolean) => void;
  activeDrawer: string;
  setActiveDrawer: (f: string) => void;
}
const defaultState = {
  isOpen: false,
  activeDrawer: "",
  setIsOpen: () => {},
  setActiveDrawer: () => {},
};
export const NavBarContext = createContext<NavBrContextInterface>(defaultState);

export const NavBar = () => {
  const [galleryMenuState, setGallerymenuState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState("");

  const handleOverlay = () => {
    setIsOpen(!isOpen);
    setActiveDrawer("");
  };
  useEffect(() => {
    isOpen === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isOpen]);

  const pageName = useLocation();
  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
  }, [pageName]);

  return (
    <>
      <NavBarContext.Provider
        value={{ isOpen, setIsOpen, activeDrawer, setActiveDrawer }}
      >
        <div className={styles.navBarWrapper}>
          {activeDrawer === "login" && <Login />}
          {activeDrawer !== "login" && <AppBar />}
          {galleryMenuState &&
            (activeDrawer === "" || activeDrawer === "filterMenu") && (
              <GalleryMenu />
            )}
        </div>
        {isOpen && <OverlayMenu onClick={handleOverlay} />}
      </NavBarContext.Provider>
    </>
  );
};
