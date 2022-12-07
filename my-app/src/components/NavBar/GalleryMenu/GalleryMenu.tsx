import styles from "./GalleryMenu.module.scss";
import { FilterMenu } from "./FilterMenu/FilterMenu";
import { NavBarContext } from "../../NavBar/NavBar";
import { useContext, useState, useEffect } from "react";

export const GalleryMenu = () => {
  const { isOpen, setIsOpen, activeDrawer, setActiveDrawer } =
    useContext(NavBarContext);
  const [filterMenu, setFilterMenu] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFilterMenu(false);
    }
  }, [isOpen]);

  const handleDrawer = () => {
    setFilterMenu(!filterMenu);
    setIsOpen(!isOpen);
    !filterMenu ? setActiveDrawer("filterMenu") : setActiveDrawer("");
  };
  return (
    <>
      <div className={styles.navBarGallery}>
        <button className={styles.linkNav} onClick={handleDrawer}>
          Filter
        </button>
        <button className={styles.linkNav}>Grid</button>
      </div>
      {activeDrawer === "filterMenu" && <FilterMenu />}
    </>
  );
};
