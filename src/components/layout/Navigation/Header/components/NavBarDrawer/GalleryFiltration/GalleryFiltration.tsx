import { Checkbox } from "components/common/Checkbox";
import { MenuDrawer } from "components/common/MenuDrawer/MenuDrawer";
import { SingleCategory } from "./SingleCategory/SingleCategory";
import styles from "./GalleryFiltration.module.scss";

export const GalleryFiltration = () => {
  return (
    <MenuDrawer variant="gallery">
      <div className={styles.navBarFilterlayout}>
        <SingleCategory title="Price">
          <div className={styles.categoryContainer}>
            <Checkbox
              id="above 2000"
              label="Under 2000 PLN"
              variant="textLight"
              size="sm"
            />
            <Checkbox
              id="above 2000"
              label="More than 2000 PLN"
              variant="textLight"
              size="sm"
            />
          </div>
        </SingleCategory>
        <SingleCategory title="Shape">
          <div className={styles.categoryContainer}>
            <Checkbox
              id="square"
              label="Square"
              variant="textLight"
              size="sm"
            />
            <Checkbox
              id="rectangular"
              label="Rectangular"
              variant="textLight"
              size="sm"
            />
            <Checkbox
              id="triptych"
              label="Triptych"
              variant="textLight"
              size="sm"
            />
          </div>
        </SingleCategory>
        <SingleCategory title="Color">
          <div className={styles.categoryContainerColor}>
            <Checkbox id="red" size="sm" />
            <Checkbox id="orange" size="sm" />
          </div>
        </SingleCategory>
      </div>
      <div className={styles.filterGroupButton}>
        <button className={styles.filterBtn}>reset filters</button>
        <button className={styles.filterBtnApply}>apply filters</button>
      </div>
    </MenuDrawer>
  );
};
