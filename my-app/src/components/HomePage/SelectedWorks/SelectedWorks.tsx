import styles from "./SeletedWorks.module.scss";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import { galleryType } from "../HomePage";

export const SelectedWorks = ({ selected }: { selected: galleryType[] }) => {
  return (
    <>
      <div>
        <h3 className={styles.SelectedMainText}>
          Discover more
          <br />
          through selected artworks
        </h3>
        {selected.map((card, index) => (
          <div className={styles.SelectedCardWrapper}>
            <SelectedCard
              key={index}
              title={card.mainPageData.title}
              icon={card.mainPageData.icon}
              description={card.mainPageData.description}
              img={card.img.cover}
            />
          </div>
        ))}
      </div>
    </>
  );
};
