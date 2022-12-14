import { useContext } from "react";
import { Btn, Checkbox, MenuDrawer } from "components/common";
import { category } from "utils/category";
import { NavBarContext } from "../../../Header";
import { SingleCategory } from "./SingleCategory";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryFiltration.module.scss";

export const GalleryFiltration = () => {
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
        <SingleCategory title="Availability">
          <div className={styles.categoryContainer}>
            {category.availability.map((availability) => (
              <Checkbox
                key={availability}
                id={availability}
                name={availability}
                label={availability}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(availability)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Shape">
          <div className={styles.categoryContainer}>
            {category.shape.map((shape) => (
              <Checkbox
                key={shape}
                id={shape}
                name={shape}
                label={shape}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(shape)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Technique">
          <div className={styles.categoryContainer}>
            {category.technique.map((technique) => (
              <Checkbox
                key={technique}
                id={technique}
                name={technique}
                label={technique}
                size="sm"
                variant="textLight"
                checked={selectedValues.includes(technique)}
                onChange={handleChange}
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Color">
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
          let's see
        </Btn>
        <Btn variant="rect" upperCase fullWidth size="sm" onClick={handleReset}>
          reset filters
        </Btn>
      </div>
    </MenuDrawer>
  );
};
