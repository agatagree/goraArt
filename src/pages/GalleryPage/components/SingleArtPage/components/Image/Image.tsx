import { useTranslation } from "react-i18next";
import styles from "./Image.module.scss";

export const Image = ({ img }: { img: string }) => {
  const { t } = useTranslation();
  const altText = t("common.img-title") as string;
  return <img src={img} alt={altText} className={styles.img} loading="lazy" />;
};
