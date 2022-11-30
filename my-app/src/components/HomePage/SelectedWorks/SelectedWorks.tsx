import styles from "./SeletedWorks.module.scss";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import { galleryType } from "../HomePage";
import { Button } from "../../utils/Button/Button";

export const SelectedWorks = ({ data }: { data: galleryType[] }) => {
  return (
    <>
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
          <Button linkTo={"/gallery"} text={"See all works"} />
        </div>
      </div>
    </>
  );
};
