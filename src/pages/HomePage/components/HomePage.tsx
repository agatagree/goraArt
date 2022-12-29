import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { Loader } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { BannerIntro } from "./BannerSection";
import { Detail } from "./DetailSection";
import { Selected } from "./SelectedSection";
import { Tailor } from "./TailorSection";

export const HomePage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
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

  return (
    <>
      <BannerIntro />
      <MainLayout>
        <Tailor data={tailorSectionData} />
        <Selected data={selectedSectionData} />
        <Detail data={detailSectionData} />
      </MainLayout>
    </>
  );
};
