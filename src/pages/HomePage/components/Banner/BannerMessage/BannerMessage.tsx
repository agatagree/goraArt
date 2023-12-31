import { useTranslation } from "react-i18next";
import { Text, TextVariant } from "components/common/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.bannerTextlayout}>
      <Text variant={TextVariant.mainHeader} color="primary" as="h1">
        {t("home-page.banner.title-1")}
        <br />
        {t("home-page.banner.title-2")}
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant={TextVariant.subHeader} color="primary" as="h2">
          {t("home-page.banner.subtitle")}
        </Text>
      </div>
    </div>
  );
};
