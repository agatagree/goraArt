import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text } from "components/common";
import { ArtDescription } from "components/layout/ArtDescription";
import { GalleryType } from "utils/Types";
import styles from "./SelectedCard.module.scss";

export const SelectedCard = ({ card }: { card: GalleryType }) => {
  const { t } = useTranslation("dynamic");
  return (
    <>
      <div className={styles.selectedDescription}>
        <div className={styles.selectedTitleContainer}>
          <img
            className={styles.selectedMessageTitleIcon}
            src={card.mainPageData.icon}
            alt={card.mainPageData.title}
          />
          <div className={styles.selectedTitle}>
            <Text variant="header" size="xl">
              {t(card.mainPageData.title, "selected works", { ns: "dynamic" })}
            </Text>
          </div>
        </div>
        <div className={styles.selectedDescriptionText}>
          <Text>{t(card.mainPageData.description, "", { ns: "dynamic" })}</Text>
        </div>
      </div>
      <Btn
        as={Link}
        to={`/gallery/${card.id}`}
        className={styles.selectedImgWrapper}
      >
        <img
          className={styles.selectedImgSide}
          src={card.img.cover}
          alt={card.title}
        />
        <ArtDescription
          title={card.title}
          code={card.code}
          year={card.year}
          technique={card.technique}
          width={card.dimensions.width}
          height={card.dimensions.height}
        />
      </Btn>
    </>
  );
};
