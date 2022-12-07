import { galleryType } from "../HomePage";
import styles from "./Tailor.module.scss";

export const Tailor = ({ data }: { data: galleryType[] }) => {
  return (
    <>
      <div className={styles.MainInfoLayout}>
        <h3 className={styles.IntroText}>
          Original, abstract oil paintings
          <br />
          tailored to your space.
        </h3>

        <img
          className={styles.IntroImg}
          src={data[0].img.wiz}
          alt={data[0].title}
        />
      </div>
    </>
  );
};
