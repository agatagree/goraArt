import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onSnapshot, query, where } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { Btn } from "components/common";
import { ArtDescription, MessagePage } from "components/layout";
import { GalleryType } from "utils/Types";
import { GalleryCardSkeleton } from "./components/GalleryCardSkeleton/GalleryCardSkeleton";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryPage.module.scss";

export const GalleryPage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);
  const [emptySearch, setEmptySearch] = useState(false);
  const { selectedValues } = useContext(FilterContext);

  useEffect(() => {
    if (selectedValues.length > 0) {
      const q = query(
        galleryCollection,
        where("tags", "array-contains-any", selectedValues)
      );
      onSnapshot(q, (card) => {
        setGallery(getDataFromSnapshot(card));
        setLoad(true);
      });
      if (gallery.length === 0) {
        setEmptySearch(true);
      } else {
        setEmptySearch(false);
      }
    } else {
      onSnapshot(galleryCollection, (card) => {
        setGallery(getDataFromSnapshot(card));
        setLoad(true);
      });
    }
  }, [selectedValues, load, gallery]);

  if (emptySearch) {
    return <MessagePage message={"search"} />;
  }

  return (
    <div className={styles.galleryLayout}>
      {!load && <GalleryCardSkeleton cards={6} />}
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
