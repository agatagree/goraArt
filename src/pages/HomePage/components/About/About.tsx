import { useTranslation } from "react-i18next";
import { HalfRowLayout } from "components/layout";

export const About = () => {
  const { t } = useTranslation();

  return (
    <HalfRowLayout
      title={t("home-page.about.title")}
      description={
        <>
          {t("home-page.about.description-1")} <br />
          <br /> {t("home-page.about.description-2")} <br />
          <br /> {t("home-page.about.description-3")}{" "}
        </>
      }
      imgPath="/assets/aboutImg.png"
      artTitle={t("common.img-title")}
    />
  );
};
