import { FC } from "react";
import { GalleryType } from "utils/Types";
import { classNames } from "utils/css";
import { TextSection } from "./components/TextSection";
import styles from "./HalfRowLayout.module.scss";

type HalfRowLayoutProps = {
  data: GalleryType;
  variant?: "reverse";
};

export const HalfRowLayout: FC<HalfRowLayoutProps> = ({ data, variant }) => {
  const classItem = classNames(styles.layout, variant && styles[variant]);
  return (
    <div className={classItem}>
      {/* <TextSection />
      <ImgSection /> */}
    </div>
  );
};
