import { useTranslation } from "react-i18next";
import { BannerMessage } from "./BannerMessage/BannerMessage";
import styles from "./Banner.module.scss";

export const Banner = () => {
  const { t } = useTranslation();
  const imgTitle = t("common.imgTitle");
  return (
    <div className={styles.layout}>
      <img
        className={styles.bannerImg}
        src="/assets/blue-0221-banner.jpg"
        alt={imgTitle}
      />
      <div className={styles.bannerText}>
        <BannerMessage />
      </div>
    </div>
  );
};
