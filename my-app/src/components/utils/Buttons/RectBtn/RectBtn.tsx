import styles from "./RectBtn.module.scss";

interface buttonProps {
  text: string;
}

export const RectBtn = ({ text }: buttonProps) => {
  return (
    <button className={styles.buttonStyle}>
      <p className={styles.buttonText}>{text}</p>
    </button>
  );
};
