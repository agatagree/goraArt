import styles from "./SelectedCard.module.scss";

interface SelectedTypes {
  title: string;
  icon: string;
  description: string;
  img: string;
}

export const SelectedCard = ({ title, icon, description, img}: SelectedTypes ) => {
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
            {title}
          </h4>
        </div>
        <p className={styles.SelectedMessageText}>{description}</p>
      </div>
      <div className={styles.SelectedImgContainer}>
        <img
          className={styles.SelectedImgSide}
          src={img}
          alt={title}
        />
      </div>
    </>
  );
};
