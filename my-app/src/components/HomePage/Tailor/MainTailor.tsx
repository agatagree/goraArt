import styles from "./MainTailor.module.scss";
import { where, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { galleryCollection } from "../../../api/firebaseIndex";
import { galleryType } from "../HomePage";
import { Loader } from "../../utils/Loader/Loader";

export interface TailorProps {
  img: string;
  title: string;
}

export const MainTailor = ({img, title} : TailorProps) => {
  // const [gallery, setGallery] = useState<galleryType[]>([]);
  // const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   const q = query(galleryCollection, where("mainPage", "==", "true"));
  //   onSnapshot(q, (art) => {
  //     setGallery(getDataFromSnapshot(art));
  //     setLoad(true);
  //   });
  // }, [load]);

  // if (load === false) {
  //   return <Loader />;
  // }

  return (
    <>
        <div className={styles.MainInfoLayout}>
          <h3 className={styles.IntroText}>
            Original, abstract oil paintings
            <br />
            tailored to your space.
          </h3>

          <img
            className={styles.IntroImg}
            src={img}
            alt={title}
          />
        </div>
    </>
  );
};
