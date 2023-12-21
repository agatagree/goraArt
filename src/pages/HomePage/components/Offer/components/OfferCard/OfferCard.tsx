import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Text, TextVariant } from "components/common";
import { OfferCardProps } from "./types";
import styles from "./OfferCard.module.scss";

export const OfferCard: FC<OfferCardProps> = ({ imgPath, id }) => {
  const { t } = useTranslation();
  const imgTitle = t("common.img-title");
  return (
    <div className={styles.layout}>
      <img
        src={imgPath}
        alt={imgTitle}
        className={styles.imgContainer}
        loading="lazy"
      />
      <div className={styles.textContainer}>
        <Text variant={TextVariant.subHeaderMedium} size="m">
          {t(`home-page.offer.title-${id}`)}
        </Text>
        <Text>{t(`home-page.offer.description-${id}`)}</Text>
      </div>
    </div>
  );
};
