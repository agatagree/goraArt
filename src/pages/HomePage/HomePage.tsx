import { useEffect, useState } from "react";
import { onSnapshot, where, query } from "firebase/firestore";
import { Loader } from "components/common";
import { MainLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { Banner, Intro, Selected, Offer, About, Contact } from "./components";
import { HomePageSection } from "./enums";
import { getMainPageSectionData } from "./utils";
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

  return (
    <>
      <Banner />
      <MainLayout fullHeight>
        <Intro />
        <Selected
          data={getMainPageSectionData(gallery, HomePageSection.Selected)}
        />
        <Offer data={getMainPageSectionData(gallery, HomePageSection.Offer)} />
        <About />
        <Contact />
      </MainLayout>
    </>
  );
};
