import { useTranslation } from "react-i18next";
import { VscArrowDown } from "react-icons/vsc";
import { Text } from "components/common/Text";
import styles from "./BannerMessage.module.scss";

export const BannerMessage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text variant="mainHeader" color="primaryLight">
        {t("homePage.introMain")}
        <br />
        {t("homePage.introSecondary")}
      </Text>
      <div className={styles.heroSubtextContainer}>
        <Text variant="header" size="xl" color="primaryLight">
          {t("homePage.introSubtitle")}
        </Text>
        <Text variant="header" size="xxl" color="primaryLight">
          <VscArrowDown />
        </Text>
      </div>
    </>
  );
};
