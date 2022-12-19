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

// export type AppContextInterface = {
//   name: string;
//   author: string;
//   url: string;
// };

// export const GalleryContext = createContext<AppContextInterface | null>(null);

// const sampleAppContext: AppContextInterface = {
//   name: "Using React Context in a Typescript App",
//   author: "thehappybug",
//   url: "http://www.example.com",
// };
