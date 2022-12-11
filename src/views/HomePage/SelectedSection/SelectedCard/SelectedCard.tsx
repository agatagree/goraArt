import { Link } from "react-router-dom";
import { Text } from "../../../../components/common/Text/Text";
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
      <div className={styles.SelectedDescription}>
        <div className={styles.SelectedTitleContainer}>
          <img
            className={styles.SelectedMessageTitleIcon}
            src={icon}
            alt={title}
          />
          <div className="SelectedTitle">
            <Text variant="header" size="xl">
              {pageTitle}
            </Text>
          </div>
        </div>
        <Text>{description}</Text>
      </div>
      <Link to={`/gallery/${cardId}`} className={styles.SelectedImgWrapper}>
        <img className={styles.SelectedImgSide} src={img} alt={title} />
        <div className={styles.SelectedImgDescription}>
          <Text size="sm">
            {title} {code} / {technique} / {width}x{height}cm / {year}
          </Text>
        </div>
      </Link>
    </>
  );
};
