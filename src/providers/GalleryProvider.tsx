import {
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
  createContext,
} from "react";
import {
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
  getCountFromServer,
} from "firebase/firestore";
import { GalleryType } from "utils/Types";
import { getDataFromSnapshot, galleryCollection } from "api";
import { FilterContext } from "providers/FilterProvider";

export type GalleryContextType = {
  gallery: GalleryType[];
  load: boolean;
  handleMore: () => void;
  hasMore: boolean;
  totalCount: number;
};

const initialState: GalleryContextType = {
  gallery: [],
  load: false,
  handleMore: () => {},
  hasMore: true,
  totalCount: 0,
};

const GalleryContext = createContext<GalleryContextType>(initialState);

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<
    QueryDocumentSnapshot<DocumentData> | undefined
  >(undefined);
  const [totalCount, setTotalCount] = useState<number>(0);
  const { selectedValues } = useContext(FilterContext);
  const galleryItemNumber = 6

  const memoizedTotalCountFromServer = useMemo(() => {
    return selectedValues.length > 0
      ? query(
          galleryCollection,
          where("tags", "array-contains-any", selectedValues)
        )
      : galleryCollection;
  }, [selectedValues]);

  const memoizedQuery = useMemo(() => {
    return selectedValues.length > 0
      ? query(
          galleryCollection,
          orderBy("order"),
          where("tags", "array-contains-any", selectedValues),
          limit(galleryItemNumber)
        )
      : query(galleryCollection, orderBy("order"), limit(galleryItemNumber));
  }, [selectedValues]);

  useEffect(() => {
    const fetchCount = async () => {
      const snapshot = await getCountFromServer(memoizedTotalCountFromServer);
      const galleryNum = snapshot.data().count;
      setTotalCount(galleryNum);
    };
    fetchCount();
    const unsubsribe = onSnapshot(memoizedQuery, (card) => {
      setGallery(getDataFromSnapshot(card));
      setLastDoc(card.docs[card.docs.length - 1]);
      setHasMore(getDataFromSnapshot(card).length < totalCount);
      setLoad(true);
    });
    return unsubsribe;
  }, [memoizedQuery, totalCount, memoizedTotalCountFromServer]);

  const handleMore = () => {
    const unsubsribe = onSnapshot(
      selectedValues.length > 0
        ? query(
            galleryCollection,
            orderBy("order"),
            where("tags", "array-contains-any", selectedValues),
            startAfter(lastDoc),
            limit(galleryItemNumber)
          )
        : query(
            galleryCollection,
            orderBy("order"),
            startAfter(lastDoc),
            limit(galleryItemNumber)
          ),
      (card) => {
        setGallery((gallery) => [...gallery, ...getDataFromSnapshot(card)]);
        setLastDoc(card.docs[card.docs.length - 1]);
        setHasMore(
          [...gallery, ...getDataFromSnapshot(card)].length < totalCount
        );
      }
    );
    return unsubsribe;
  };

  return (
    <GalleryContext.Provider
      value={{ gallery, load, handleMore, hasMore, totalCount }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  return useContext(GalleryContext);
};
