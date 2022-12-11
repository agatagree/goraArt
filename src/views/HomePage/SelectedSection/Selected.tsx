import { SelectedCard } from "./SelectedCard/SelectedCard";
import { GalleryType } from "../../../utils/Types";
import { ArrowBtn } from "../../../components/common/Buttons/ArrowBtn/ArrowBtn";
import styles from "./Selected.module.scss";
import { Text } from "../../../components/common/Text/Text";

export const Selected = ({ data }: { data: GalleryType[] }) => {
  return (
    <div>
      <div className={styles.SelectedMainText}>
        <Text variant="subHeader">
          Discover more
          <br />
          through selected artworks
        </Text>
      </div>
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
