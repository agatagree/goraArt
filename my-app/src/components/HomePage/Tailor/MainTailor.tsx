import styles from "./MainTailor.module.scss";
import { where, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { galleryCollection } from "../../../api/firebaseIndex";
import { Loader } from "../../utils/messages/Loader/Loader";
import { galleryType } from "../HomePage";

export const MainTailor = () => {
  const [gallery, setGallery] = useState<galleryType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const q = query(galleryCollection, where("mainPagePosition", "==", 1));
    onSnapshot(q, (art) => {
      setGallery(getDataFromSnapshot(art));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      {gallery ? (
        <div className={styles.MainInfoLayout}>
          <h3 className={styles.IntroText}>
            Original, abstract oil paintings
            <br />
            tailored to your space.
          </h3>

          <img
            className={styles.IntroImg}
            src={gallery[0].img.wiz}
            alt={gallery[0].title}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
