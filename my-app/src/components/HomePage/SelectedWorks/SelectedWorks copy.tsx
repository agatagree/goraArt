import styles from "./SeletedWorks.module.scss";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import { SelectedWorksData } from "./SelectedWorksData";
import { onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { galleryCollection } from "../../../api/firebaseIndex";
import { Loader } from "../../utils/Loader/Loader";

interface galleryType {
  title: string;
  code: string;
  color: [];
  dimensions: {
    width: number;
    height: string;
  };
  img: {
    cover: string;
    wiz: string;
    zoom: string;
  };
  mainPage: boolean;
  mainPageData: {
    mainPagePosition: number;
    title: string;
    description: string;
    icon: string;
  };
}

export const SelectedWorks = () => {
  const [gallery, setGallery] = useState<galleryType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const q = query(galleryCollection, where("mainPage", "==", true));
    onSnapshot(q, (art) => {
      setGallery(getDataFromSnapshot(art));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  const selectedArt = gallery.filter((obj) => {
    return (
      obj.mainPageData.mainPagePosition >= 2 &&
      obj.mainPageData.mainPagePosition <= 4
    );
  });

  return (
    <>
      <div>
        <h3 className={styles.SelectedMainText}>
          Discover more
          <br />
          through selected artworks
        </h3>
        {selectedArt.map((card, index) => (
          <div className={styles.SelectedCardWrapper}>
            <SelectedCard
              key={index}
              title={card.mainPageData.title}
              icon={card.mainPageData.icon}
              description={card.mainPageData.description}
              img={card.img.cover}
            />
          </div>
        ))}
      </div>
    </>
  );
};
