import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot } from "../../api/firebaseGetData";
import { galleryCollection } from "../../api/firebaseIndex";
import { Loader } from "../utils/Loader/Loader";
import { GalleryType } from "../../components/utils/Types";
import styles from "./Gallery.module.scss";

export const Gallery = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    onSnapshot(galleryCollection, (singleArt) => {
      setGallery(getDataFromSnapshot(singleArt));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.galleryLayout}>
        {gallery.map((singleArt) => (
          <Link
            to={`/gallery/${singleArt.id}`}
            className={styles.art}
            key={singleArt.id}
          >
            <img
              className={styles.artImg}
              src={singleArt.img.cover}
              alt={singleArt.title}
            />
            <div className={styles.artDescription}>
              <p>
                {singleArt.title} {singleArt.code}, {singleArt.year}
              </p>
              <p>{singleArt.technique}</p>
              <p>
                {singleArt.dimensions.width}x{singleArt.dimensions.height}cm
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
