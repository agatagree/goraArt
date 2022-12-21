import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { Loader } from "components/common";
import { GalleryType } from "utils/Types";
import { BannerIntro } from "./BannerSection/Banner";
import { Detail } from "./DetailSection/Detail";
import { Selected } from "./SelectedSection/Selected";
import { Tailor } from "./TailorSection/Tailor";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const q = query(galleryCollection, where("mainPage", "==", true));
    onSnapshot(q, (art) => {
      setGallery(getDataFromSnapshot(art));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  const tailorSectionData = gallery.filter((obj) => {
    return obj.mainPageData.mainPagePosition === 1;
  });

  const selectedSectionData = gallery.filter((obj) => {
    return (
      obj.mainPageData.mainPagePosition >= 2 &&
      obj.mainPageData.mainPagePosition <= 4
    );
  });

  const detailSectionData = gallery.filter((obj) => {
    return obj.mainPageData.mainPagePosition === 5;
  });

  return (
    <>
      <BannerIntro />
      <div className={styles.narrowLayout}>
        <Tailor data={tailorSectionData} />
        <Selected data={selectedSectionData} />
      </div>
      <Detail data={detailSectionData} />
    </>
  );
};
