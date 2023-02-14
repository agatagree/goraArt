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
              <div className={styles.skeletonContenerArt}>
                <div className={styles.skeletonArt}>
                  <Skeleton height={"100%"} width={"100%"} />
                </div>
              </div>
              <Skeleton className={styles.skeletonBox} />
            </div>
          </div>
        ))}
    </>
  );
};
//
