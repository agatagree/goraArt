import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onSnapshot, query, where } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { Btn, Loader } from "components/common";
import { ArtDescription } from "components/layout";
import { MessagePage } from "components/layout/MessagePage";
import { GalleryType } from "utils/Types";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryPage.module.scss";

export const GalleryPage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);
  const { selectedValues } = useContext(FilterContext);

  useEffect(() => {
    if (selectedValues.length > 0) {
      const q = query(
        galleryCollection,
        where("tags", "array-contains-any", selectedValues)
      );
      onSnapshot(q, (card) => {
        setGallery(getDataFromSnapshot(card));
      });
    } else {
      onSnapshot(galleryCollection, (card) => {
        setGallery(getDataFromSnapshot(card));
      });
    }
    setLoad(true);
  }, [selectedValues, load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      {gallery.length !== 0 ? (
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
      ) : (
        <MessagePage message={"search"} />
      )}
    </>
  );
};
