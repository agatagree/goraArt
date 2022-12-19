import { useContext } from "react";
import { NavBarContext } from "../Header";
import styles from "./NavBarOverlay.module.scss";

export const NavBarOverlay = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      {isOpen && (
        <div
          className={styles.toggleOverlay}
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
    </>
  );
};
