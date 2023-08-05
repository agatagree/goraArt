import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { ArtDescription } from "components/layout";
import { GalleryType } from "utils/Types";
import styles from "./GallerySingleItem.module.scss";

interface ArtItemProps {
  as: "image" | "link";
  art: GalleryType;
}

export const ArtItem: FC<ArtItemProps> = ({ as, art }) => {
  const initialImage = art.img.cover;
  const [image, setImage] = useState(initialImage);
  return (
    <Btn
      as={Link}
      to={`/gallery/${art.id}`}
      className={styles.art}
      key={art.id}
    >
      <img
        className={styles.artImg}
        src={image}
        alt={art.title}
        onMouseEnter={() => setImage(art.img.wiz)}
        onMouseLeave={() => setImage(initialImage)}
      />
      <ArtDescription
        title={art.title}
        code={art.code}
        year={art.year}
        technique={art.technique}
        width={art.dimensions.width}
        height={art.dimensions.height}
      />
    </Btn>
  );
};
