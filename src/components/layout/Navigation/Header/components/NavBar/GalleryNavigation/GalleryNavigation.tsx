import { useContext } from "react";
import { Btn } from "components/common/Buttons";
import { NavBarContext } from "../../Header";
import styles from "./GalleryNavigation.module.scss";

export const GalleryNavigation = () => {
  const { setActiveDrawer, setIsOpen, isOpen } =
    useContext(NavBarContext);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    !isOpen ? setActiveDrawer("filterMenu") : setActiveDrawer("");
  };
  return (
    <div className={styles.navBarGallery}>
      <div className={styles.navBarGalleryContainer}>
        <Btn size="sm" onClick={handleDrawer}>
          Filter
        </Btn>
        <Btn size="sm">Grid</Btn>
      </div>
    </div>
  );
};
