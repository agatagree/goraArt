import { useEffect, useState } from "react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { getDataFromSnapshot, bannerCollection } from "api";
import { Loader } from "components/common";
import { Banner } from "components/layout";
import { BannerMessage } from "./BannerMessage/BannerMessage";
import { BannerNavigation } from "./BannerNavigation/BannerNavigation";
import styles from "./Banner.module.scss";

interface GalleryType {
  order: number;
  img?: string;
}

export const BannerIntro = () => {
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
        <div className={styles.layout}>
          <div className={styles.navigation}>
            <BannerNavigation onClick={goToNextSlide} direction={"right"} />
            <BannerNavigation onClick={goToPreviousSlide} direction={"left"} />
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
          </div>
          <Banner background={gallery[currentSlideIndex].img}>
            <BannerMessage />
          </Banner>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
