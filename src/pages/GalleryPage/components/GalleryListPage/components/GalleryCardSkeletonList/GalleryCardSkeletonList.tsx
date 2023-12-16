import { GalleryCardSkeleton } from "../GalleryCardSkeleton";

export const GalleryCardSkeletonList = ({ cards }: { cards: number }) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_card, index) => (
          <GalleryCardSkeleton key={index} index={index} />
        ))}
    </>
  );
};
