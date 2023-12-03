import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 0H0V32H32V0ZM16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        className={styles.logo}
      />
    </svg>
  );
};
