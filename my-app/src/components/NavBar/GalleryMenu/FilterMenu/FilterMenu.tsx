import styles from "./FilterMenu.module.scss";

export const FilterMenu = () => {
  return (
    <div className={styles.navBarFilterLayout}>
      <div className={styles.navBarCategoryContainer}>
        <h5 className={styles.categoryTitle}>Price</h5>
        <div className={styles.categoryContainer}>
          <input
            type="checkbox"
            id="under 2000"
            name="under 2000"
            className={styles.filterCheckbox}
          />
          <label htmlFor="under 2000">Under 2000 PLN</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="above 2000"
            name="above 2000"
            className={styles.filterCheckbox}
          />
          <label htmlFor="above 2000">More than 2000 PLN</label>
        </div>
      </div>
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
        <div className={styles.categoryContainer}>
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
  );
};
