import styles from "./Image.module.scss";

export const Image = ({ img }: { img: string }) => {
  return <img src={img} alt="Wojciech góra paintings" className={styles.img} />;
};
