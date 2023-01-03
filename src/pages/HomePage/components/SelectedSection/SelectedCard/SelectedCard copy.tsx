import { Link } from "react-router-dom";
import { Btn } from "components/common/Buttons";
import { Text } from "components/common/Text";
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
              {pageTitle}
            </Text>
          </div>
        </div>
        <Text>{description}</Text>
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
