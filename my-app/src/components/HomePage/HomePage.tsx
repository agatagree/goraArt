import styles from "./HomePage.module.scss";
import { MainSlider } from "./MainSlider/MainSlider";
import { SelectedWorks } from "./SelectedWorks/SelectedWorks";
import { MainTailor } from "./Tailor/MainTailor";

export interface galleryType {
  title: string;
  code: string;
  color: string[];
  dimension: {
    width: number;
    height: number;
  };
  img: {
    cover: string;
    wiz: string;
    zoom: string;
  };
  mainPage?: boolean;
  mainPagePosition?: number;
}

export const HomePage = () => {
  return (
    <>
      <MainSlider />
      <div className={styles.HomePageContent}>
        <MainTailor />
        <SelectedWorks />
      </div>
    </>
  );
};
