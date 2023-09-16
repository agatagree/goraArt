import { FC } from "react";
import { ArtItem } from "components/feature";
import { HalfRowImgSectionProps } from "../../types/half-row-img-section-props";
import styles from "./ImgSection.module.scss";

export const ImgSection: FC<HalfRowImgSectionProps> = ({
  imgPath,
  artTitle,
  link,
  artId,
  artViz,
  artCover,
  artCode,
  artYear,
  artTechnique,
  artWidth,
  artHeight,
}) => {
  return (
    <div className={styles.wrapper}>
      {link ? (
        <ArtItem
          artId={artId!}
          artTitle={artTitle!}
          artViz={artViz!}
          artCover={artCover!}
          artCode={artCode!}
          artYear={artYear!}
          artTechnique={artTechnique!}
          artWidth={artWidth!}
          artHeight={artHeight!}
          isFullWidth
        />
      ) : (
        <img className={styles.imgItem} src={imgPath} alt={artTitle!} />
      )}
    </div>
  );
};
