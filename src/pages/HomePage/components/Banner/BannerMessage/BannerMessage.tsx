import { useTranslation } from "react-i18next";
import { Text } from "components/common/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.bannerTextlayout}>
      <Text variant="mainHeader" color="primary">
        {t("homePage.introMain")}
        <br />
        {t("homePage.introSecondary")}
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant="mainHeaderSubText" color="primary">
          {t("homePage.introSubtitle")}
        </Text>
      </div>
    </div>
  );
};
