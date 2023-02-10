import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text } from "components/common";
import { ArtDescription } from "components/layout/ArtDescription";
import styles from "./SelectedCard.module.scss";

interface SelectedTypes {
  cardId: string;
  pageTitle: string;
  icon: string;
  description: string;
  img: string;
  year: number;
  technique: string;
  title: string;
  code: string;
  width: number;
  height: number;
}

export const SelectedCard = ({
  cardId,
  pageTitle,
  icon,
  description,
  img,
  year,
  technique,
  title,
  code,
  width,
  height,
}: SelectedTypes) => {
  const { t } = useTranslation(["static", "dynamics"]);
  return (
    <>
      <div className={styles.selectedDescription}>
        <div className={styles.selectedTitleContainer}>
          <img
            className={styles.selectedMessageTitleIcon}
            src={icon}
            alt={title}
          />
          <div className={styles.selectedTitle}>
            <Text variant="header" size="xl">
              {t(pageTitle, { ns: "dynamic" })}
            </Text>
          </div>
        </div>
        <Text>{t(description, { ns: "dynamic" })}</Text>
      </div>
      <Btn
        as={Link}
        to={`/gallery/${cardId}`}
        className={styles.selectedImgWrapper}
      >
        <img className={styles.selectedImgSide} src={img} alt={title} />
        <ArtDescription
          title={title}
          code={code}
          year={year}
          technique={technique}
          width={width}
          height={height}
        />
      </Btn>
    </>
  );
};
