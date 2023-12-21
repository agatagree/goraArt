import { useTranslation } from "react-i18next";
import { TextVariant } from "components/common";
import { HalfRowLayout, HalfRowLayoutVariant } from "components/layout";
import styles from "./About.module.scss";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.layout}>
      <HalfRowLayout
        title={t("home-page.about.title")}
        titleVariant={TextVariant.basicHeader}
        description={
          <div className={styles.description}>
            {t("home-page.about.description-1")} <br />
            <br /> {t("home-page.about.description-2")} <br />
            <br /> {t("home-page.about.description-3")}{" "}
          </div>
        }
        imgPath="/assets/aboutImg.png"
        artTitle={t("common.img-title")}
        variant={HalfRowLayoutVariant.reverse}
      />
    </div>
  );
};
