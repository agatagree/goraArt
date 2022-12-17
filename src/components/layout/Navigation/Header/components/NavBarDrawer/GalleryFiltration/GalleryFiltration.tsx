import { Checkbox } from "components/common/Checkbox";
import { MenuDrawer } from "components/common/MenuDrawer/MenuDrawer";
import { Text } from "components/common/Text";
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
                variant="TextLight"
                size="sm"
              />
              <Checkbox
                id="above 2000"
                label="More than 2000 PLN"
                variant="TextLight"
                size="sm"
              />
            </div>
          </SingleCategory>

          <div className={styles.navBarCategoryContainer}>
            <h5 className={styles.categoryTitle}>Color</h5>
            <div className={styles.categoryContainerColor}>
              <input
                type="checkbox"
                id="red"
                name="red"
                className={styles.filterCheckboxColor}
              />
              <input
                type="checkbox"
                id="brown"
                name="brown"
                className={styles.filterCheckboxColor}
              />
            </div>
          </div>
          <div className={styles.navBarCategoryContainer}>
            <h5 className={styles.categoryTitle}>Shape</h5>
            <div>
              <input
                type="checkbox"
                id="square"
                name="square"
                className={styles.filterCheckbox}
              />
              <label htmlFor="square">square</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rectangular"
                name="rectangular"
                className={styles.filterCheckbox}
              />
              <label htmlFor="rectangular">rectangular</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="triptych"
                name="triptych"
                className={styles.filterCheckbox}
              />
              <label htmlFor="triptych">triptych</label>
            </div>
          </div>
        </div>
        <div className={styles.filterGroupButton}>
          <button className={styles.filterBtn}>reset filters</button>
          <button className={styles.filterBtnApply}>apply filters</button>
        </div>
    </MenuDrawer>
  );
};
