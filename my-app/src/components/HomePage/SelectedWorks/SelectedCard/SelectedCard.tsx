import styles from "./SelectedCard.module.scss";
import { Link } from "react-router-dom";
import { SingleArtWork } from "../../../SingleArtWork/SingleArtWork";

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
          <h4 className={`${styles.H05} ${styles.SelectedTitle}`}>
            {pageTitle}
          </h4>
        </div>
        <p className={styles.SelectedMessageText}>{description}</p>
      </div>
      <Link to={`/gallery/${cardId}`} className={styles.SelectedImgWrapper}>
        <div className={styles.SelectedImgContainer}>
          <img className={styles.SelectedImgSide} src={img} alt={title} />
        </div>
        <div className={styles.SelectedImgDescription}>
          <p>
            {title} {code} / {technique} / {width}x{height}cm / {year}
          </p>
        </div>
      </Link>
    </>
  );
};

