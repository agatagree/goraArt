import { useEffect, useState, createContext, ReactNode } from "react";
import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { GalleryType } from "utils/Types";

export const GalleryContext = createContext<GalleryType[]>([]);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);

  useEffect(() => {
    onSnapshot(galleryCollection, (card) => {
      setGallery(getDataFromSnapshot(card));
    });
  }, []);

  return (
    <GalleryContext.Provider value={gallery}>
      {children}
    </GalleryContext.Provider>
  );
};
