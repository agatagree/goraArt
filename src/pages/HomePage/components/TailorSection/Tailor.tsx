import { useTranslation } from "react-i18next";
import { Text } from "components/common";
import { GalleryType } from "utils/Types";
import styles from "./Tailor.module.scss";

export const Tailor = ({ data }: { data: GalleryType[] }) => {
  const { t } = useTranslation("static");

  return (
    <>
      <div className={styles.introText}>
        <Text variant="header" size="xxxl">
          {t("homePage.tailor")}
        </Text>
      </div>
      <img
        className={styles.introImg}
        src={data[0].img.wiz}
        alt={data[0].title}
      />
    </>
  );
};
