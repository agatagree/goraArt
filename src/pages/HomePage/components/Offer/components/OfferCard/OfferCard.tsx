import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import { OfferCardProps } from "./types";
import styles from "./OfferCard.module.scss";

export const OfferCard: FC<OfferCardProps> = ({
  title,
  description,
  imgPath,
}) => {
  const { t } = useTranslation();
  const imgTitle = t("common.imgTitle");
  return (
    <div className={styles.layout}>
      <img src={imgPath} alt={imgTitle} className={styles.imgContainer} />
      <div className={styles.textContainer}>
        <Text variant="basicHeader">{t(`homePage.offerSection.${title}`)}</Text>
        <Text>{t(`homePage.offerSection.${description}`)}</Text>
      </div>
    </div>
  );
};
