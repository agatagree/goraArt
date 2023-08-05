import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import { HalfRowLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import styles from "./Tailor.module.scss";

export const Tailor = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.layout}>
      <HalfRowLayout>
        <div className={styles.introText}>
          <Text variant="header" size="xxxl">
            {t("homePage.tailor")}
          </Text>
        </div>
        <img
          className={styles.introImg}
          src="/assets/tailor.png"
          alt="Wojciech Góra painting"
        />
      </HalfRowLayout>
    </div>
  );
};
