import { useTranslation } from "react-i18next";
import { HalfRowLayout } from "components/layout";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <HalfRowLayout
      title={t("homePage.introSection.introTitle")}
      imgPath="/assets/tailor.png"
      artTitle={t("common.imgTitle")}
    />
  );
};
