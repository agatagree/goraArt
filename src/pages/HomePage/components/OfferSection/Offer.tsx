import { Text } from "components/common";
import { useTranslation } from "react-i18next";
import styles from "./Offer.module.scss";

export const Offer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.selectedMainText}>
        <Text variant="subHeader">
          {t("homePage.offerTitle")}
        </Text>
      </div>
    </div>
  );
};
