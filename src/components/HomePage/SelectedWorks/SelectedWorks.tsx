import { SelectedCard } from "./SelectedCard/SelectedCard";
import { GalleryType } from "../../utils/Types";
import { ArrowBtn } from "../../utils/Buttons/ArrowBtn/ArrowBtn";
import styles from "./SeletedWorks.module.scss";

export const SelectedWorks = ({ data }: { data: GalleryType[] }) => {
  return (
    <div>
      <h3 className={styles.SelectedMainText}>
        Discover more
        <br />
        through selected artworks
      </h3>
      {data.map((card) => (
        <div key={card.id} className={styles.SelectedCardWrapper}>
          <SelectedCard
            cardId={card.id}
            pageTitle={card.mainPageData.title}
            icon={card.mainPageData.icon}
            description={card.mainPageData.description}
            img={card.img.cover}
            title={card.title}
            code={card.code}
            year={card.year}
            technique={card.technique}
            width={card.dimensions.width}
            height={card.dimensions.height}
          />
        </div>
      ))}
      <div className={styles.SelectedButton}>
        <ArrowBtn linkTo={"/gallery"} text={"See all works"} />
      </div>
    </div>
  );
};
