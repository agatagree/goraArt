import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={styles.logo}
    >
      <rect width="32" height="32" fill="black" />
      <circle cx="16" cy="16" r="14" fill="white" />
    </svg>
  );
};

