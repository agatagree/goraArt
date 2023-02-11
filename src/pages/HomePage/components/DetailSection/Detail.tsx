import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Btn, Text } from "components/common";
import { GalleryType } from "utils/Types";
import styles from "./Detail.module.scss";

export const Detail = ({ data }: { data: GalleryType[] }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.detailSectionLayout}>
      <div className={styles.detailSectionMessage}>
        <div className={styles.detailTitle}>
          <Text variant="header" size="xxxl">
            {t("homePage.detailTitle")}
          </Text>
        </div>
        <Text>{t("homePage.detailDescription")}</Text>
        <Btn as={Link} to="/about" variant="arrow" size="xl">
          {t("homePage.detailBtn")}
        </Btn>
      </div>
      <img
        className={styles.detailImg}
        src="https://firebasestorage.googleapis.com/v0/b/gora0-8bdf5.appspot.com/o/gallery%2Fred-0422-mainPage.png?alt=media&token=416e2f3f-03df-4038-aecc-d9ead8a8fb7d"
        alt={data[0].title}
      />
    </div>
  );
};
