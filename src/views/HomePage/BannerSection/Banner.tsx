import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { bannerCollection } from "../../../api/firebaseIndex";
import { Loader } from "../../../components/common/Loader/Loader";
import { BannerNavigation } from "./BannerNavigation/BannerNavigation";
import { BannerMessage } from "./BannerMessage/BannerMessage";
import styles from "./Banner.module.scss";

interface GalleryType {
  order: number;
  img?: string;
}

export const Banner = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const q = query(bannerCollection, orderBy("order"));
    onSnapshot(q, (art) => {
      setGallery(getDataFromSnapshot(art));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  const goToNextSlide = () => {
    if (currentSlideIndex === gallery.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(gallery.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <>
      {gallery ? (
        <div className={styles.MainSliderLayout}>
          <BannerNavigation onClick={goToNextSlide} direction={"right"} />
          <BannerNavigation onClick={goToPreviousSlide} direction={"left"} />
          <BannerMessage />
          <div className={styles.progressBar}>
            {gallery.map((_, index) => (
              <div
                className={
                  currentSlideIndex === index
                    ? styles.progressBarBtnActive
                    : styles.progressBarBtn
                }
                key={index}
              ></div>
            ))}
          </div>
          <div className={styles.MainSliderOverlay}></div>
          <img
            src={gallery[currentSlideIndex].img}
            alt="art"
            className={styles.MainSliderCard}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
