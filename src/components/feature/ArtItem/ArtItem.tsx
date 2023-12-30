import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { classNames } from "utils/css";
import { ArtDescription } from "./ArtDescription";
import styles from "./ArtItem.module.scss";

interface ArtItemProps {
  artTitle: string;
  artId: string;
  artViz: string;
  artCode: string;
  artYear: number;
  artTechnique: string;
  artWidth: number;
  artHeight: number;
  artCover: string;
  isFullWidth?: boolean;
}

export const ArtItem: FC<ArtItemProps> = ({
  artTitle,
  artId,
  artViz,
  artCover,
  artCode,
  artYear,
  artTechnique,
  artWidth,
  artHeight,
  isFullWidth,
}) => {
  const initialImage = artCover;
  const [image, setImage] = useState(initialImage);
  return (
    <div
      className={
        isFullWidth ? styles.artContainer : styles.artContainerWithBorders
      }
      key={artId}
    >
      <div className={styles.artContent}>
        <div
          className={
            isFullWidth ? styles.imgContainerArtFull : styles.imgContainerArt
          }
        >
          <Btn
            as={Link}
            to={`/gallery/${artId}`}
            className={classNames(
              styles.artImg,
              isFullWidth && styles.artImgFull
            )}
          >
            <img
              className={classNames(
                styles.artImgWithBorders,
                isFullWidth && styles.artImgFull
              )}
              src={image}
              alt={artTitle}
              onMouseEnter={() => setImage(artViz)}
              onMouseLeave={() => setImage(initialImage)}
              loading="lazy"
            />
          </Btn>
        </div>
        <ArtDescription
          title={artTitle}
          code={artCode}
          year={artYear}
          technique={artTechnique}
          width={artWidth}
          height={artHeight}
        />
      </div>
    </div>
  );
};
