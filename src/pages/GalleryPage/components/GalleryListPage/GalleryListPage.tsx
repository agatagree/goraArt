import InfiniteScroll from "react-infinite-scroll-component";
import { ArtItem } from "components/feature";
import { MessagePage } from "components/layout";
import { useGallery } from "providers/GalleryProvider";
import { GalleryCardSkeleton } from "./components/GalleryCardSkeleton/GalleryCardSkeleton";
import styles from "./GalleryListPage.module.scss";

export const GalleryListPage = () => {
  const { gallery, load, handleMore, hasMore, totalCount } = useGallery();

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
            <ArtItem
              key={card.id}
              artId={card.id}
              artTitle={card.title}
              artViz={card.img.wiz}
              artCover={card.img.cover}
              artCode={card.code}
              artYear={card.year}
              artTechnique={card.technique}
              artWidth={card.dimensions.width}
              artHeight={card.dimensions.height}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};
