import { useContext, useState, useEffect } from "react";
import { FilterMenu } from "../../NavBarDrawer/GalleryFiltration/GalleryFiltration";
import { NavBarContext } from "../../Header";
import styles from "./GalleryMenu.module.scss";

export const GalleryMenu = () => {
  const { activeDrawer, setActiveDrawer } =
    useContext(NavBarContext);
  const [filterMenu, setFilterMenu] = useState(false);

  const handleDrawer = () => {
    setFilterMenu(!filterMenu);
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
