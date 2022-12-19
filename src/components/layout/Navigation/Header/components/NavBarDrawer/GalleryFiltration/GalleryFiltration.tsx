import { useContext } from "react";
import { Btn } from "components/common/Buttons";
import { Checkbox } from "components/common/Checkbox";
import { MenuDrawer } from "components/common/MenuDrawer/MenuDrawer";
import { category } from "utils/category";
import { SingleCategory } from "./SingleCategory/SingleCategory";
import { GalleryContext } from "providers/AppProvider";
import styles from "./GalleryFiltration.module.scss";

export const GalleryFiltration = () => {
  const gallery = useContext(GalleryContext);

  return (
    <MenuDrawer variant="gallery">
      <div className={styles.navBarFilterlayout}>
        <SingleCategory title="Availability">
          <div className={styles.categoryContainer}>
            {category.availability.map((availability) => (
              <Checkbox
                id={availability}
                label={availability}
                size="sm"
                variant="textLight"
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Shape">
          <div className={styles.categoryContainer}>
            {category.shape.map((shape) => (
              <Checkbox
                id={shape}
                label={shape}
                size="sm"
                variant="textLight"
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Technique">
          <div className={styles.categoryContainer}>
            {category.technique.map((technique) => (
              <Checkbox
                id={technique}
                label={technique}
                size="sm"
                variant="textLight"
              />
            ))}
          </div>
        </SingleCategory>
        <SingleCategory title="Color">
          <div className={styles.categoryContainerColor}>
            {category.colors.map((color) => (
              <Checkbox id={color.name} size="sm" color={color.color} />
            ))}
          </div>
        </SingleCategory>
      </div>
      <div className={styles.filterGroupButton}>
        <Btn variant="rectDark" fullWidth size="sm">
          apply filters
        </Btn>
        <Btn variant="rect" fullWidth size="sm">
          reset filters
        </Btn>
      </div>
    </MenuDrawer>
  );
};
