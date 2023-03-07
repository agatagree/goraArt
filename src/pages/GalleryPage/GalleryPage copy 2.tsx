import { useContext, useState, useEffect, useRef, useCallback } from "react";
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
import { Btn } from "components/common";
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

  // console.log(`hasMore: ${hasMore}`);
  // console.log(`gallery length: ${gallery.length}`);
  // console.log(`totalCount: ${totalCount}`);

  // useEffect(() => {
  //   const fetchCount = async () => {
  //     const snapshot = await getCountFromServer(galleryCollection);
  //     const galleryNum = snapshot.data().count + 1;
  //     setTotalCount(galleryNum);
  //   };
  //   fetchCount();
  // }, []);

  // const fetchCount = async () => {
  //   const snapshot = await getCountFromServer(galleryCollection);
  //   const galleryNum = snapshot.data().count + 1;
  //   setTotalCount(galleryNum);
  // };
  // fetchCount();

  useEffect(() => {
    const fetchCount = async () => {
      const snapshot = await getCountFromServer(galleryCollection);
      const galleryNum = snapshot.data().count;
      setTotalCount(galleryNum);
    };
    fetchCount();
    const unsubsribe = onSnapshot(
      selectedValues.length > 0
        ? query(
            galleryCollection,
            orderBy("order"),
            limit(6),
            where("tags", "array-contains-any", selectedValues)
          )
        : query(galleryCollection, orderBy("order"), limit(6)),
      (card) => {
        setGallery(getDataFromSnapshot(card));
        setLoad(true);
        setLastDoc(card.docs[card.docs.length - 1]);
        setHasMore(
          getDataFromSnapshot(card).length < totalCount ? true : false
        );
        console.log(`gallerylengh1: ${getDataFromSnapshot(card).length}`);
        console.log(`totalCount1: ${totalCount}`);
        // console.log(getDataFromSnapshot(card).length < totalCount);
      }
    );

    return unsubsribe;
  }, [selectedValues, totalCount]);

  const handleMore = () => {
    onSnapshot(
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
        setLoad(true);
        setLastDoc(card.docs[card.docs.length - 1]);
        setHasMore(
          [...gallery, ...getDataFromSnapshot(card)].length < totalCount
            ? true
            : false
        );
        console.log(
          `gallerylengh: ${[...gallery, ...getDataFromSnapshot(card)].length}`
        );
        console.log(`totalCount: ${totalCount}`);
        console.log(
          [...gallery, ...getDataFromSnapshot(card)].length < totalCount
        );
      }
    );
  };

  const observer = useRef<IntersectionObserver>();
  const loadMoreCallback = useCallback(
    (node: HTMLImageElement) => {
      // if (load) return;
      if (observer.current) observer.current.disconnect();
      const option: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("vis");
          handleMore();
        }
      }, option);
      if (node) observer.current.observe(node);
    },
    [hasMore, gallery]
  );

  if (load && gallery.length === 0) {
    return <MessagePage message={"search"} />;
  }

  return (
    <div className={styles.galleryLayout}>
      {!load && <GalleryCardSkeleton cards={6} />}
      {gallery.map((card, index) => (
        <GallerySingleItem
          card={card}
          // ref={gallery.length === index + 1 ? loadMoreCallback : undefined}
          key={card.id}
        />
      ))}
      <Btn onClick={handleMore}>load more</Btn>
    </div>
  );
};
