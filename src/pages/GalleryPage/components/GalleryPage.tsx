import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Btn, Loader } from "components/common";
import { ArtDescription } from "components/layout";
import { GalleryContext } from "providers/AppProvider";
import styles from "./GalleryPage.module.scss";
import { onSnapshot, query, where } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { GalleryType } from "utils/Types";
import { FilterContext } from "providers/FilterProvider";


export const GalleryPage = () => {
  // const gallery = useContext(GalleryContext);
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const { selectedValues, dispatch } = useContext(FilterContext);

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
  }, [selectedValues]);


  return (
    <>
      {gallery ? (
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
        <Loader />
      )}
    </>
  );
};
