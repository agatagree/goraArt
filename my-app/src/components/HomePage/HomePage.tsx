import styles from "./HomePage.module.scss";
import { MainSlider } from "./MainSlider/MainSlider";

export const HomePage = () => {
  return (
    <>
      <div className={styles.HomePageIntro}>
        <MainSlider />
      </div>
    </>
  );
};
