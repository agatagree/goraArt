import { useContext, useState, useEffect, useRef, useCallback, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
import { MessagePage } from "components/layout";
import { GalleryType } from "utils/Types";
import { GallerySingleItem, GalleryCardSkeleton } from "./components";
import { getDataFromSnapshot, galleryCollection } from "api";
import { FilterContext } from "providers/FilterProvider";
import styles from "./GalleryPage.module.scss";

export const GalleryPage = () => {
  const [gallery, setGallery] = useState<GalleryType[]>([]);
  const [load, setLoad] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<
    QueryDocumentSnapshot<DocumentData> | undefined
  >(undefined);
  const [totalCount, setTotalCount] = useState<number>(0);
  const { selectedValues } = useContext(FilterContext);





  useEffect(() => {
    const fetchCount = async () => {
      const q =
        selectedValues.length > 0
          ? query(
              galleryCollection,
              where("tags", "array-contains-any", selectedValues)
            )
          : galleryCollection;
      const snapshot = await getCountFromServer(q);
      const galleryNum = snapshot.data().count;
      setTotalCount(galleryNum);
    };
    fetchCount();
    const unsubsribe = onSnapshot(
      selectedValues.length > 0
        ? query(
            galleryCollection,
            orderBy("order"),
            where("tags", "array-contains-any", selectedValues),
            limit(6)
          )
        : query(galleryCollection, orderBy("order"), limit(6)),
      (card) => {
        setGallery(getDataFromSnapshot(card));
        setLoad(true);
        setLastDoc(card.docs[card.docs.length - 1]);
        setHasMore(
          getDataFromSnapshot(card).length < totalCount ? true : false
        );
      }
    );

    return unsubsribe;
  }, [selectedValues, totalCount]);

  const handleMore = () => {
    const unsubsribe = onSnapshot(
      selectedValues.length > 0
        ? query(
            galleryCollection,
            orderBy("order"),
            where("tags", "array-contains-any", selectedValues),
            startAfter(lastDoc),
            limit(6)
          )
        : query(
            galleryCollection,
            orderBy("order"),
            startAfter(lastDoc),
            limit(6)
          ),
      (card) => {
        setGallery((gallery) => [...gallery, ...getDataFromSnapshot(card)]);
        setLastDoc(card.docs[card.docs.length - 1]);
        setHasMore(
          [...gallery, ...getDataFromSnapshot(card)].length < totalCount
            ? true
            : false
        );
      }
    );
    return unsubsribe;
  };

  if (load && gallery.length === 0) {
    return <MessagePage message={"search"} />;
  }

  return (
    <>
      <div className={styles.galleryContainer}>
        <InfiniteScroll
          dataLength={totalCount}
          next={handleMore}
          hasMore={hasMore}
          loader={<GalleryCardSkeleton cards={2} />}
          className={styles.galleryLayout}
        >
          {!load && <GalleryCardSkeleton cards={6} />}
          {gallery.map((card) => (
            <GallerySingleItem card={card} key={card.id} />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};
