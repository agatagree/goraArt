import { useContext } from "react";
import { Btn } from "components/common";
import { NavBarContext } from "../../../Header";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryNavigation.module.scss";

export const GalleryNavigation = () => {
  const { setActiveDrawer, setIsOpen, isOpen } = useContext(NavBarContext);
  const { selectedValues } = useContext(FilterContext);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    !isOpen ? setActiveDrawer("filterMenu") : setActiveDrawer("");
  };

  return (
    <div className={styles.navBarGallery}>
      <div className={styles.navBarGalleryContainer}>
        <Btn size="sm" onClick={handleDrawer}>
          Filter{selectedValues.length !== 0 && `: ${selectedValues.length}`}
        </Btn>
      </div>
    </div>
  );
};
