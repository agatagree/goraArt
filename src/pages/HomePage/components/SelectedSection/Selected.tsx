import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text } from "components/common";
import { HalfRowLayout } from "components/layout";
import { GalleryType } from "utils/Types";
import { SelectedCard } from "./SelectedCard/SelectedCard";
import styles from "./Selected.module.scss";

export const Selected = ({ data }: { data: GalleryType[] }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.selectedMainText}>
        <Text variant="subHeader">
          {t("homePage.selectedTitle1")}
          <br />
          {t("homePage.selectedTitle2")}
        </Text>
      </div>
      <div className={styles.selectedLayout}>
        {data.map((card) => (
          <HalfRowLayout key={card.id} variant="reverse">
            <SelectedCard card={card} />
          </HalfRowLayout>
        ))}
      </div>
      <div className={styles.selectedButton}>
        <Btn as={Link} to="/gallery" size="xl" variant="arrow">
          {t("homePage.selectedBtn")}
        </Btn>
      </div>
    </div>
  );
};
