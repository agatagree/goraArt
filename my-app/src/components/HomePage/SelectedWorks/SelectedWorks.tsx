import styles from "./SeletedWorks.module.scss";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import { SelectedWorksData } from "./SelectedWorksData";

export const SelectedWorks = () => {
  return (
    <>
      <div>
        <h3 className={styles.SelectedMainText}>
          Discover more
          <br />
          through selected artworks
        </h3>

        {SelectedWorksData.map((card, index) => (
          <div className={styles.SelectedCardWrapper}>
            <SelectedCard
              key={index}
              title={card.title}
              icon={card.icon}
              description={card.description}
              img={card.img}
            />
          </div>
        ))}
      </div>
    </>
  );
};
