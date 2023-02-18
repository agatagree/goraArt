import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { onSnapshot } from "firebase/firestore";
import { categoryCollection, getDataFromSnapshot } from "api";
import { Btn, Loader, MenuDrawer, Text } from "components/common";
import { MessagePage } from "components/layout";
import { NavBarContext } from "../../../Header";
import { CategoryCheckbox } from "./CategoryCheckbox";
import { TagsType, ColorType } from "./types/TagsTypes";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryFiltration.module.scss";

export const GalleryFiltration = () => {
  const { t } = useTranslation();
  const { dispatch } = useContext(FilterContext);
  const { setActiveDrawer, isOpen, setIsOpen } = useContext(NavBarContext);
  const [tags, setTags] = useState<TagsType[]>([]);
  const [loadTags, setLoadTags] = useState(false);

  const handleReset = () => {
    dispatch({ type: "CLEAR_SELECTION" });
  };

  const handleCloseDrawer = () => {
    setActiveDrawer("");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onSnapshot(categoryCollection, (tag) => {
      setTags(getDataFromSnapshot(tag));
      setLoadTags(true);
    });
  }, [loadTags]);

  if (!loadTags) {
    return <Loader />;
  }
  if (!tags[0]) {
    return <MessagePage message={"search"} />;
  }
  return (
      <MenuDrawer variant="gallery">
        <div className={styles.navBarFilterlayout}>
          {/* {Object.entries(tags[0])
            .filter(([key, _value]) => key !== "id")
            .map(([key, value]: [string, string | ColorType[] | string[]]) => (
              <div key={key} className={styles.categoryLayout}>
                <Text variant="smallHeader" size="sm">
                  {t(`navBar.${key}`)}
                </Text>
                <div
                  className={
                    key !== "color"
                      ? styles.categoryContainer
                      : styles.categoryContainerColor
                  }
                >
                  {Object.entries(value).map(([key, value]) => (
                    <CategoryCheckbox value={value} key={key} />
                  ))}
                </div>
              </div>
            ))} */}
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
          <Btn
            variant="rect"
            upperCase
            fullWidth
            size="sm"
            onClick={handleReset}
          >
            {t("common.resetFilters")}
          </Btn>
        </div>
      </MenuDrawer>
  );
};
