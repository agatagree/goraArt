import { useTranslation } from "react-i18next";
import { HalfRowLayout } from "components/layout";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <HalfRowLayout
      title={t("home-page.intro.title")}
      imgPath="/assets/tailor.png"
      artTitle={t("common.img-title")}
    />
  );
};
