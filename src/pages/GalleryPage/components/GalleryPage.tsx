import { useContext } from "react";
import { Link } from "react-router-dom";
import { Btn, Loader } from "components/common";
import { ArtDescription } from "components/layout";
import { GalleryContext } from "providers/AppProvider";
import styles from "./GalleryPage.module.scss";


export const GalleryPage = () => {
  const gallery = useContext(GalleryContext);
  console.log( gallery)

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
