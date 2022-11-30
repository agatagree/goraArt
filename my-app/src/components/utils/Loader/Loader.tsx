import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.progressBar}>
      <span className={styles.bar}>
        <span className={styles.progress}></span>
      </span>
    </div>
  );
};
