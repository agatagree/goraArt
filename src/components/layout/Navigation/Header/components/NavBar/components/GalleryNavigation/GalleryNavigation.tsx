import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Btn } from "components/common";
import { NavBarContext } from "../../../../Header";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryNavigation.module.scss";

export const GalleryNavigation = () => {
  const { t } = useTranslation();
  const { setActiveDrawer, setIsOpen, isOpen } = useContext(NavBarContext);
  const { selectedValues } = useContext(FilterContext);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    !isOpen ? setActiveDrawer("filterMenu") : setActiveDrawer("");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.layoutContainer}>
        <Btn size="sm" onClick={handleDrawer}>
          {t("navBar.filter")}
          {selectedValues.length !== 0 && `: ${selectedValues.length}`}
        </Btn>
      </div>
    </div>
  );
};
