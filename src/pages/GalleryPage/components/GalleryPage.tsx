import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { Btn } from "components/common/Buttons";
import { Loader } from "components/common/Loader";
import { ArtDescription } from "components/layout/ArtDescription";
import { GalleryType } from "utils/Types";
import styles from "./GalleryPage.module.scss";

export const GalleryPage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    onSnapshot(galleryCollection, (card) => {
      setGallery(getDataFromSnapshot(card));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <div className={styles.galleryLayout}>
      {gallery.map((card) => (
        <Btn
          as={Link}
          to={`/gallery/${card.id}`}
          className={styles.art}
          key={card.id}
        >
          <img
            className={styles.artImg}
            src={card.img.cover}
            alt={card.title}
          />
          <ArtDescription
            title={card.title}
            code={card.code}
            year={card.year}
            technique={card.technique}
            width={card.dimensions.width}
            height={card.dimensions.height}
          />
        </Btn>
      ))}
    </div>
  );
};
