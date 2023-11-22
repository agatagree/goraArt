import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TextVariant } from "components/common";
import {
  HalfRowLayout,
  HalfRowLayoutVariant,
  SectionTitleLayout,
  TextSectionLayoutVariant,
} from "components/layout";
import { SelectedProps } from "./types/selected-props";
import styles from "./Selected.module.scss";

export const Selected: FC<SelectedProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitleLayout
        text={
          <>
            {t("home-page.selected.title-1")}
            <br />
            {t("home-page.selected.title-2")}
          </>
        }
      />
      <div className={styles.layout}>
        {data.map((element, index) => (
          <HalfRowLayout
            key={element.id}
            variant={HalfRowLayoutVariant.alternating}
            icon={element.mainPageData.icon}
            title={t(element.mainPageData.title, "selected works", {
              ns: "dynamic",
            })}
            titleVariant={TextVariant.subHeaderMedium}
            textSectionVariant={TextSectionLayoutVariant.square}
            description={t(element.mainPageData.description, "", {
              ns: "dynamic",
            })}
            link={`/gallery/${element.id}`}
            artId={element.id}
            artTitle={element.title}
            artViz={element.img.wiz}
            artCover={element.img.cover}
            artCode={element.code}
            artYear={element.year}
            artTechnique={element.technique}
            artWidth={element.dimensions.width}
            artHeight={element.dimensions.height}
            isEndingBtn={index === data.length - 1}
          />
        ))}
      </div>
    </>
  );
};
