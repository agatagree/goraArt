import styles from "./HeroText.module.scss";

export const HeroText = () => {
  return (
    <div className={styles.HeroTextContainer}>
      <h1 className={`${styles.H01} ${styles.HeroTextMessage}`}>
        Wojciech Góra
        <br />
        paintings
      </h1>
      <div className={styles.HeroSubtextContainer}>
        <h4 className={`${styles.H05} ${styles.HeroSubtextMessage}`}>
          Art to match your space
        </h4>
        <img
          className={styles.HeroSubtextIcon}
          src="/assets/arrow.svg"
          alt="arrow down"
        />
      </div>
    </div>
  );
};
