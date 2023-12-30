import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text, TextVariant } from "components/common";
import { OfferCardProps } from "./types";
import styles from "./OfferCard.module.scss";

export const OfferCard: FC<OfferCardProps> = ({ imgPath, id }) => {
  const { t } = useTranslation();
  const imgTitle = t("common.img-title");
  return (
    <div className={styles.layout}>
      <Btn
        as={Link}
        to={id === 3 ? `/#contact` : `/gallery`}
      >
        <img
          src={imgPath}
          alt={imgTitle}
          className={styles.imgContainer}
          loading="lazy"
        />
      </Btn>
      <div className={styles.textContainer}>
        <Text variant={TextVariant.subHeaderMedium} size="m">
          {t(`home-page.offer.title-${id}`)}
        </Text>
        <Text>{t(`home-page.offer.description-${id}`)}</Text>
      </div>
    </div>
  );
};
