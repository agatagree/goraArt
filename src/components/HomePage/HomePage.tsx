import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { getDataFromSnapshot } from "../../api/firebaseGetData";
import { galleryCollection } from "../../api/firebaseIndex";
import { MainSlider } from "./MainSlider/MainSlider";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";
import { Tailor } from "./Tailor/Tailor";
import { Loader } from "../utils/Loader/Loader";
import { Detail } from "./Detail/Detail";
import styles from "./HomePage.module.scss";
import { GalleryType } from "../utils/Types";

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
      <MainSlider />
      <div className={styles.HomePageContent}>
        <Tailor data={tailorSectionData} />
        <SelectedWorks data={selectedSectionData} />
      </div>
      <Detail data={detailSectionData} />
    </>
  );
};
