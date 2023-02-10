import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection, translationCollection } from "api";
import { Loader } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType, TranslationTypes } from "utils/Types";
import { BannerIntro } from "./BannerSection";
import { Detail } from "./DetailSection";
import { Selected } from "./SelectedSection";
import { Tailor } from "./TailorSection";

export const HomePage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [translation, setTranslation] = useState<TranslationTypes[]>([]);
  const [galleryLoad, setGalleryLoad] = useState(false);
  const [translationLoad, setTranslationLoad] = useState(false);

  useEffect(() => {
    const q = query(galleryCollection, where("mainPage", "==", true));
    onSnapshot(q, (art) => {
      setGallery(getDataFromSnapshot(art));
      setGalleryLoad(true);
    });
    onSnapshot(translationCollection, (data) => {
      setTranslation(getDataFromSnapshot(data));
      setTranslationLoad(true);
    });
  }, [galleryLoad, translationLoad ]);

  if ((galleryLoad || translationLoad ) === false) {
    return <Loader />;
  }

  const tailorSectionData = gallery.filter((obj) => {
    return obj.mainPageData.mainPagePosition === 1;
  });

  const selectedSectionData = gallery.filter((obj) => {
    return (
      obj.mainPageData.mainPagePosition >= 2 &&
      obj.mainPageData.mainPagePosition <= 4
    );
  });

  const detailSectionData = gallery.filter((obj) => {
    return obj.mainPageData.mainPagePosition === 5;
  });

  // console.log(translation.find(item => item.key = "red"))

  return (
    <>
      {/* <BannerIntro /> */}
      <MainLayout>
        <Tailor data={tailorSectionData} />
        {/* <Selected data={selectedSectionData} /> */}
        <Detail data={detailSectionData} />
      </MainLayout>
    </>
  );
};
