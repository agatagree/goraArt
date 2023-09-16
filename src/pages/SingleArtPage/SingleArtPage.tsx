import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, NavLink } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { Btn, Loader, Text } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { Image } from "./components";
import { singleArtCollection } from "api";
import styles from "./SingleArtPage.module.scss";

export const SingleArtPage = () => {
  const [singleArt, setSingleArt] = useState<GalleryType>({} as GalleryType);
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const { t } = useTranslation(["static", "dynamic"]);

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
      <MainLayout gap="g120">
        <div className={styles.description}>
          <div className={styles.descriptionContainer}>
            <Text variant="header" size="lg" capitalize>
              {singleArt.title} {singleArt.code}
            </Text>
            <Text>
              {t(singleArt.technique, { ns: "dynamic" })} /{" "}
              {singleArt.dimensions.width}x{singleArt.dimensions.height}cm /{" "}
              {singleArt.year}
            </Text>
          </div>
          <div className={styles.descriptionContainer}>
            <Text>
              {t("common.state")}:{" "}
              {t(singleArt.availability, { ns: "dynamic" })}
            </Text>
            <Btn as={NavLink} to="/contact" variant="rectDark">
              {t("single-art-page.ask-for-price")}
            </Btn>
          </div>
        </div>
        <Image img={singleArt.img.cover} />
        <Image img={singleArt.img.wiz} />
        <Image img={singleArt.img.zoom} />
        <div className={styles.descriptionContainer}>
          <Text size="md"> {t("single-art-page.interested-in-this-piece?")}</Text>
          <Btn as={NavLink} to="/contact" variant="rectDark">
            {t("single-art-page.ask-for-price")}
          </Btn>
        </div>
      </MainLayout>
  );
};
