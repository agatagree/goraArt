import InfiniteScroll from "react-infinite-scroll-component";
import { MessagePage } from "components/layout";
import { GalleryCardSkeletonList } from "./components/GalleryCardSkeletonList";
import { useGallery } from "providers/GalleryProvider";
import styles from "./GalleryListPage.module.scss";
import { ArtItem } from "components/feature";

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
          loader={<GalleryCardSkeletonList cards={2} />}
          className={styles.galleryLayout}
        >
          {!load && <GalleryCardSkeletonList cards={6} />}
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
