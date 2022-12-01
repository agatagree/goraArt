import styles from "./GalleryMenu.module.scss";
import { Dispatch, SetStateAction } from "react";
import { FilterMenu } from "./FilterMenu/FilterMenu";

type toogleFilterType = {
  toggleFilter: boolean;
  setToggleFilter: Dispatch<SetStateAction<boolean>>;
};

export const GalleryMenu = ({
  toggleFilter,
  setToggleFilter,
}: toogleFilterType) => {
  const handleToggle = () => {
    setToggleFilter(!toggleFilter);
  };
  return (
    <>
      <div className={styles.navBarGallery}>
        <button className={styles.linkNav} onClick={handleToggle}>
          Filter
        </button>
        <button className={styles.linkNav}>Grid</button>
      </div>
      {toggleFilter && <FilterMenu />}
    </>
  );
};
