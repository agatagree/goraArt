import { BannerMessage } from "./BannerMessage/BannerMessage";
import styles from "./Banner.module.scss";

export const BannerIntro = () => {
  return (
    <div className={styles.layout}>
      <img
        className={styles.bannerImg}
        src="/assets/blue-0221-banner.jpg"
        alt="Wojciech Góra painting"
      />
      <div
        className={styles.bannerText}
      >
        <BannerMessage />
      </div>
    </div>
  );
};
