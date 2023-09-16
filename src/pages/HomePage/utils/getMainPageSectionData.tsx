import { GalleryType } from "utils/Types";
import { HomePageSection } from "../enums";

export const getMainPageSectionData = (
  data: GalleryType[],
  sectionName: HomePageSection
): GalleryType[] => {
  return data
    .filter((obj) => obj.mainPageData.mainPageSection === sectionName)
    .sort(
      (a, b) =>
        a.mainPageData.mainPagePosition - b.mainPageData.mainPagePosition
    );
};
