import { NavBar } from "../NavBar/NavBar";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.HomePageIntro}>intro</div>
    </>
  );
};
