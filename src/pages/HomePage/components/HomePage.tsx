import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { Loader } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { BannerIntro } from "./BannerSection";
import { Offer } from "./OfferSection";
import { Selected } from "./SelectedSection";
import { Tailor } from "./TailorSection";
import { getDataFromSnapshot, galleryCollection } from "api";

export const HomePage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [galleryLoad, setGalleryLoad] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(galleryCollection, where("mainPage", "==", true)),
      (art) => {
        setGallery(getDataFromSnapshot(art));
        setGalleryLoad(true);
      }
    );
    return unsubscribe;
  }, [galleryLoad]);

  if (!galleryLoad) {
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
        <Tailor />
        <Selected data={selectedSectionData} />
        <Offer />
      </MainLayout>
    </>
  );
};
