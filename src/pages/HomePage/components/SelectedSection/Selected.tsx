import { Link } from "react-router-dom";
import { Btn, Text } from "components/common";
import { HalfRowLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import styles from "./Selected.module.scss";

export const Selected = ({ data }: { data: GalleryType[] }) => {
  return (
    <div>
      <div className={styles.selectedMainText}>
        <Text variant="subHeader">
          Discover more
          <br />
          through selected artworks
        </Text>
      </div>
      <div className={styles.selectedLayout}>
        {data.map((card) => (
          <HalfRowLayout key={card.id} index={card.id} variant="reverse">
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
          </HalfRowLayout>
        ))}
      </div>
      <div className={styles.selectedButton}>
        <Btn as={Link} to="/gallery" size="xl" variant="arrow">
          See all works
        </Btn>
      </div>
    </div>
  );
};
