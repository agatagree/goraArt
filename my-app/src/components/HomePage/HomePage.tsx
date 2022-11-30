import styles from "./HomePage.module.scss";
import { MainSlider } from "./MainSlider/MainSlider";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";
import { MainTailor } from "./Tailor/MainTailor";
import { onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../api/firebaseGetData";
import { galleryCollection } from "../../api/firebaseIndex";
import { Loader } from "../utils/Loader/Loader";

export interface galleryType {
  id:string;
  title: string;
  code: string;
  color: string[];
  technique: string;
  year: number;
  dimensions: {
    width: number;
    height: number;
  };
  img: {
    cover: string;
    wiz: string;
    zoom: string;
  };
  mainPage: boolean;
  mainPageData: {
    mainPagePosition: number;
    title: string;
    description: string;
    icon: string;
  };
}

export const HomePage = () => {
  const [gallery, setGallery] = useState<galleryType[]>([]);
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
    return obj.mainPageData.mainPagePosition == 1;
  });

  const selectedSectionData = gallery.filter((obj) => {
    return (
      obj.mainPageData.mainPagePosition >= 2 &&
      obj.mainPageData.mainPagePosition <= 4
    );
  });

  return (
    <>
      <MainSlider />
      <div className={styles.HomePageContent}>
        <MainTailor
          img={tailorSectionData[0].img.wiz}
          title={tailorSectionData[0].title}
        />
        <SelectedWorks selected={selectedSectionData} />
      </div>
    </>
  );
};
