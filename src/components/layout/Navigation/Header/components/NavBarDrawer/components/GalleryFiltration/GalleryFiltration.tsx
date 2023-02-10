import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Btn, Checkbox, MenuDrawer } from "components/common";
import { category } from "utils/category";
import { NavBarContext } from "../../../Header";
import { SingleCategory } from "./SingleCategory";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryFiltration.module.scss";

export const GalleryFiltration = () => {
  const { t } = useTranslation(["static", "dynamics"]);
  const { selectedValues, dispatch } = useContext(FilterContext);
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch({ type: "SELECT_VALUE", payload: event.target.name });
    } else {
      dispatch({ type: "DESELECT_VALUE", payload: event.target.name });
    }
  };

  const handleReset = () => {
    dispatch({ type: "CLEAR_SELECTION" });
  };

  const handleCloseDrawer = () => {
    setActiveDrawer("");
    setIsOpen(!isOpen);
  };

  return (
    <MenuDrawer variant="gallery">
      <div className={styles.navBarFilterlayout}>
        <SingleCategory title={t("navBar.availability")}>
          <div className={styles.categoryContainer}>
            {category.availability.map((availability) => (
              <Checkbox
                key={availability}
                id={availability}
                name={availability}
                label={t(availability, { ns: "dynamic" })}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(availability)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title={t("navBar.shape")}>
          <div className={styles.categoryContainer}>
            {category.shape.map((shape) => (
              <Checkbox
                key={shape}
                id={shape}
                name={shape}
                label={t(shape, { ns: "dynamic" })}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(shape)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title={t("navBar.technique")}>
          <div className={styles.categoryContainer}>
            {category.technique.map((technique) => (
              <Checkbox
                key={technique}
                id={technique}
                name={technique}
                label={t(technique, { ns: "dynamic" })}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(technique)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title={t("navBar.color")}>
          <div className={styles.categoryContainerColor}>
            {category.colors.map((color) => (
              <Checkbox
                key={color.name}
                id={color.name}
                name={color.name}
                size="sm"
                color={color.color}
                checked={selectedValues.includes(color.name)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
      </div>
      <div className={styles.filterGroupButton}>
        <Btn
          variant="rectDark"
          upperCase
          fullWidth
          size="sm"
          onClick={handleCloseDrawer}
        >
          {t("common.letsSee")}
        </Btn>
        <Btn variant="rect" upperCase fullWidth size="sm" onClick={handleReset}>
          {t("common.resetFilters")}
        </Btn>
      </div>
    </MenuDrawer>
  );
};
