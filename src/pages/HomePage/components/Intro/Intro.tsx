import { useTranslation } from "react-i18next";
import { TextVariant } from "components/common";
import { HalfRowLayout, HalfRowLayoutVariant } from "components/layout";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <HalfRowLayout
      title={t("home-page.intro.title")}
      titleVariant={TextVariant.subHeader}
      imgPath="/assets/tailor.png"
      artTitle={t("common.title")}
      variant={HalfRowLayoutVariant.mobileReverse}
    />
  );
};
