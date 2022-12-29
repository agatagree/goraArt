import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { singleArtCollection } from "api";
import { Btn, Loader, Text } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { Image } from "./Image/Image";
import styles from "./SingleArtPage.module.scss";

export const SingleArtPage = () => {
  const [singleArt, setSingleArt] = useState<GalleryType>({} as GalleryType);
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  function setSingleArtWithId(data: GalleryType, id: string) {
    setSingleArt({ ...data, id });
  }

  useEffect(() => {
    const docRef = singleArtCollection(id);
    onSnapshot(docRef, (doc) => {
      setSingleArtWithId(doc.data() as GalleryType, doc.id);
      setLoad(true);
    });
  }, [id, load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      <MainLayout gap="g120">
        <div className={styles.description}>
          <div className={styles.descriptionContainer}>
            <Text variant="header" size="xxxl" capitalize>
              {singleArt.title} {singleArt.code}
            </Text>
            <Text>
              {singleArt.technique} / {singleArt.dimensions.width}x
              {singleArt.dimensions.height}cm / {singleArt.year}
            </Text>
          </div>
          <div className={styles.descriptionContainer}>
            <Text>Status: {singleArt.availability}</Text>
            <Btn as={NavLink} to="/contact" variant="rectDark">
              Ask for price
            </Btn>
          </div>
        </div>
        <Image img={singleArt.img.cover} />
        <Image img={singleArt.img.wiz} />
        <Image img={singleArt.img.zoom} />
        <div className={styles.descriptionContainer}>
          <Text size="xl"> Interested in this piece?</Text>
          <Btn as={NavLink} to="/contact" variant="rectDark">
            Ask for price
          </Btn>
        </div>
      </MainLayout>
    </>
  );
};
