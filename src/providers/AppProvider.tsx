import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { onSnapshot, query, where } from "firebase/firestore";
import { getDataFromSnapshot, galleryCollection } from "api";
import { GalleryType } from "utils/Types";
import { FilterContext } from "./FilterProvider";

export const GalleryContext = createContext<GalleryType[]>([]);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const { selectedValues, dispatch } = useContext(FilterContext);
  useEffect(() => {
    if (selectedValues.length > 0) {
      const q = query(
        galleryCollection,
        where("tags", "array-contains-any", selectedValues)
      );
      onSnapshot(q, (card) => {
        setGallery(getDataFromSnapshot(card));
      });
    } else {
      onSnapshot(galleryCollection, (card) => {
        setGallery(getDataFromSnapshot(card));
      });
    }
  }, [selectedValues]);

  return (
    <GalleryContext.Provider value={gallery}>
      {children}
    </GalleryContext.Provider>
  );
};

// const q = query(
//   galleryCollection,
//   where("tags", "array-contains-any", selectedValues)
// );
// {
//   selectedValues.length === 0
//     ? onSnapshot(galleryCollection, (card) => {
//         setGallery(getDataFromSnapshot(card));
//       })
//     : onSnapshot(q, (card) => {
//         setGallery(getDataFromSnapshot(card));
//       });
// }
