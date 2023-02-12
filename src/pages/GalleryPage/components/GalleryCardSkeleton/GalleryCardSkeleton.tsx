import Skeleton from "react-loading-skeleton";
import styles from "./GalleryCardSkeleton.module.scss";

export const GalleryCardSkeleton = ({ cards }: { cards: number }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((card, index) => (
          <div className={styles.skeletonContainer} key={index}>
            <div className={styles.skeletonContent}>
              <Skeleton height={"100%"} width={"100%"} />
              <Skeleton />
            </div>
          </div>
        ))}
    </>
  );
};
