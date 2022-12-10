import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { getDataFromSnapshot } from "../../api/firebaseGetData";
import { galleryCollection } from "../../api/firebaseIndex";
import { Banner} from "./BannerSection/Banner";
import { Selected } from "./SelectedSection/Selected";
import { Tailor } from "./TailorSection/Tailor";
import { Loader } from "../../components/common/Loader/Loader";
import { Detail } from "./DetailSection/Detail";
import styles from "./HomePage.module.scss";
import { GalleryType } from "../../utils/Types";

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
      <Banner />
      <div className={styles.HomePageContent}>
        <Tailor data={tailorSectionData} />
        <Selected data={selectedSectionData} />
      </div>
      <Detail data={detailSectionData} />
    </>
  );
};
