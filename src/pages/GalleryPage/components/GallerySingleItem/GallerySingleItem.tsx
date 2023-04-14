import { useState } from "react";
import { Link } from "react-router-dom";
import { Btn } from "components/common";
import { ArtDescription } from "components/layout";
import { GalleryType } from "utils/Types";
import styles from "./GallerySingleItem.module.scss";

export const GallerySingleItem = ({ card }: { card: GalleryType }) => {
  const initialImage = card.img.cover;
  const [image, setImage] = useState(initialImage);
  return (
    <Btn
      as={Link}
      to={`/gallery/${card.id}`}
      className={styles.art}
      key={card.id}
      onMouseEnter={() => setImage(card.img.wiz)}
      onMouseLeave={() => setImage(initialImage)}
    >
      <img className={styles.artImg} src={image} alt={card.title} />
      <ArtDescription
        title={card.title}
        code={card.code}
        year={card.year}
        technique={card.technique}
        width={card.dimensions.width}
        height={card.dimensions.height}
      />
    </Btn>
  );
};
