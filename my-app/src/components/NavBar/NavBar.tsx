import styles from "./NavBar.module.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GalleryMenu } from "./GalleryMenu/GalleryMenu";
import { AppBar } from "./AppBar/AppBar";
import { Login } from "../Authorization/Login/Login";

export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const [toggleLogin, setToggleLogin] = useState<boolean>(false);
  const [galleryMenuState, setGallerymenuState] = useState(false);

  const pageName = useLocation();

  useEffect(() => {
    if (pageName.pathname === "/gallery") {
      setGallerymenuState(true);
    } else setGallerymenuState(false);
    if (toggle && pageName.pathname === "/gallery") {
      setGallerymenuState(false);
    }
  }, [pageName, toggle]);

  useEffect(() => {
    if (toggle || toggleFilter || toggleLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggle, toggleFilter, toggleLogin]);

  return (
    <>
      <div className={styles.navBarWrapper}>
        {toggleLogin && (
          <Login toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
        )}

        <AppBar
          toggle={toggle}
          setToggle={setToggle}
          toggleLogin={toggleLogin}
          setToggleLogin={setToggleLogin}
        />
        {galleryMenuState && !toggleLogin && (
          <GalleryMenu
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
          />
        )}
      </div>
      {(toggle || toggleFilter || toggleLogin) && (
        <div
          className={styles.toggleOverlay}
          onClick={() => setToggleFilter(!toggleFilter)}
        ></div>
      )}
    </>
  );
};
