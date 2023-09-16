import { useTranslation } from "react-i18next";
import { HalfRowLayout } from "components/layout";

export const About = () => {
  const { t } = useTranslation();

  return (
    <HalfRowLayout
      title={t("homePage.aboutPage.title")}
      description={
        <div>
          {t("homePage.aboutPage.description-01")} <br />
          <br /> {t("homePage.aboutPage.description-02")} <br />
          <br /> {t("homePage.aboutPage.description-03")}{" "}
        </div>
      }
      imgPath="/assets/aboutImg.png"
      artTitle={t("common.imgTitle")}
    />
  );
};
