import styles from "./MainSlider.module.scss";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { galleryCollection } from "../../../api/firebaseIndex";
import { Loader } from "../../utils/messages/Loader/Loader";
import { BtnSlider } from "./BtnSlider/BtnSlider";

interface galleryType {
  code: string;
  color: string;
  dimension: {
    width: number;
    height: number;
  };
  img: {
    cover?: string;
    wiz?: string;
    zoom?: string;
  };
}

export const MainSlider = () => {
  const [gallery, setGallery] = useState<galleryType[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [load, setLoad] = useState(false);
  const delay = 4500;

  useEffect(() => {
    onSnapshot(galleryCollection, (art) => {
      setGallery(getDataFromSnapshot(art));
      setLoad(true);
    });

    setTimeout(
      () =>
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {};
  }, [load, currentSlideIndex]);

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

  console.log(gallery.length);
  return (
    <>
      <div className={styles.MainSliderLayout}>
        <BtnSlider onClick={goToNextSlide} direction={"right"} />
        <BtnSlider onClick={goToPreviousSlide} direction={"left"} />
        <div className={styles.progressBar}>
          {gallery
            ? gallery.map((_, index) => (
                <div className={styles.progressBarBtn} key={index}></div>
              ))
            : null}
        </div>
        {gallery ? (
          <img
            src={gallery[currentSlideIndex].img.cover}
            alt={gallery[currentSlideIndex].color}
            className={styles.MainSliderCard}
            style={{
              transform: `translate3d(${currentSlideIndex} * 100}%, 0, 0)`,
            }}
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};
